import { useState, useEffect } from 'react';
import {
  Alert, Box, Button, Chip, Dialog, DialogActions, DialogContent,
  DialogTitle, FormControlLabel, IconButton, InputAdornment,
  MenuItem, Paper, Stack, Switch, TextField, Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers, createUser, updateUser } from '../../services/UserService';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  type: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState({ ...blankForm });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Enhancement 1 — Block editors from accessing this page
  const userType = localStorage.getItem('type');
  if (userType === 'editor') {
    return (
      <Box sx={{ p: 4 }}>
        <Alert severity="error">
          You do not have permission to access this page.
        </Alert>
      </Box>
    );
  }

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      const mapped = data.users.map((u) => ({ ...u, id: u._id }));
      setUsers(mapped);
      setError('');
    } catch (err) {
      setError('Failed to load users from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?._id ?? null });
    setForm(user ? { ...blankForm, ...user, password: '' } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type: inputType } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['type', 'Role'],
      ['username', 'User name'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key] ?? '').trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!modal.id && !form.password.trim()) {
      nextErrors.password = 'Password is required.';
    }

    const email = form.email.trim().toLowerCase();
    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!nextErrors.password && form.password && form.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim())) {
      nextErrors.contactNumber = 'Contact number must be 11 digits.';
    }

    if (!nextErrors.age && !/^\d+$/.test(form.age.trim())) {
      nextErrors.age = 'Age must be a number only.';
    }

    if (!nextErrors.username && /\s/.test(form.username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    try {
      if (modal.id) {
        const payload = { ...form };
        if (!payload.password) delete payload.password;
        await updateUser(modal.id, payload);
      } else {
        await createUser(form);
      }
      await loadUsers();
      closeModal();
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving user.');
    }
  };

  const toggleStatus = async (id, isActive) => {
    try {
      await updateUser(id, { isActive: !isActive });
      await loadUsers();
    } catch (err) {
      setError('Error toggling user status.');
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const filteredUsers = users.filter((user) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      user.firstName?.toLowerCase().includes(q) ||
      user.lastName?.toLowerCase().includes(q) ||
      user.email?.toLowerCase().includes(q) ||
      user.username?.toLowerCase().includes(q);
    const matchRole = !filterRole || user.type === filterRole;
    const matchGender = !filterGender || user.gender === filterGender;
    const matchStatus =
      filterStatus === '' ? true
      : filterStatus === 'active' ? user.isActive
      : !user.isActive;
    return matchSearch && matchRole && matchGender && matchStatus;
  });

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 80,
      valueGetter: (params) => params.row._id?.slice(-5).toUpperCase(),
    },
    {
      field: 'fullName', headerName: 'Full Name', width: 170,
      valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`.trim(),
    },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'age', headerName: 'Age', width: 80 },
    {
      field: 'gender', headerName: 'Gender', width: 110,
      valueGetter: (params) => labelize(params.row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact', width: 130 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 150 },
    {
      field: 'type', headerName: 'Role', width: 110,
      valueGetter: (params) => labelize(params.row.type),
    },
    {
      field: 'isActive', headerName: 'Status', width: 110, sortable: false,
      renderCell: (params) => (
        <Chip
          size="small" variant="outlined"
          color={params.row.isActive ? 'success' : 'warning'}
          label={params.row.isActive ? 'Active' : 'Inactive'}
        />
      ),
    },
    {
      field: 'actions', headerName: 'Actions', width: 200, sortable: false,
      renderCell: (params) => params.row ? (
        <Stack direction="row" spacing={0.5} sx={{ py: 0.3 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(params.row)}>
            Edit
          </Button>
          <Button size="small" variant="contained"
            color={params.row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(params.row._id, params.row.isActive)}
          >
            {params.row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ) : null,
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4">Users</Typography>
        <Button variant="contained" onClick={() => openModal()}>Add User</Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
        <TextField size="small" placeholder="Search..." value={search}
          onChange={(e) => setSearch(e.target.value)} sx={{ flex: 2 }} />
        <TextField select size="small" label="Role" value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)} sx={{ flex: 1 }}>
          <MenuItem value="">All Roles</MenuItem>
          {roles.map((r) => <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>)}
        </TextField>
        <TextField select size="small" label="Gender" value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)} sx={{ flex: 1 }}>
          <MenuItem value="">All Genders</MenuItem>
          {genders.map((g) => <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>)}
        </TextField>
        <TextField select size="small" label="Status" value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)} sx={{ flex: 1 }}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>
      </Stack>

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden' }}>
        <Box sx={{ height: 460, width: '100%', minWidth: 0 }}>
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            loading={loading}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
            getRowId={(row) => row._id}
            sx={{ minWidth: 0, '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' } }}
          />
        </Box>
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogContent dividers sx={{ pt: 2, pb: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>{labelize(gender)}</MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('type', 'Role', { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>{labelize(role)}</MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {showPassword ? '🙈' : '👁️'}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
              <FormControlLabel
                control={<Switch name="isActive" checked={form.isActive} onChange={handleChange} />}
                label={`User status: ${form.isActive ? 'Active' : 'Inactive'}`}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;