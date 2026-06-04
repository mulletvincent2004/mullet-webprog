import { useState, useEffect } from 'react';
import {
  Alert, Box, Button, Chip, Dialog, DialogActions, DialogContent,
  DialogTitle, MenuItem, Paper, Stack, TextField, Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import constants from '../../constants';

const API_URL = `${constants.HOST}/articles`;

const blankForm = {
  slug: '',
  title: '',
  paragraphs: '',
  isActive: true,
  image: null,
};

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState({ ...blankForm });
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const loadArticles = async () => {
    try {
      const { data } = await axios.get(API_URL);
      const mapped = data.articles.map((a) => ({ ...a, id: a._id }));
      setArticles(mapped);
      setError('');
    } catch (err) {
      setError('Failed to load articles from server.');
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const openModal = (article) => {
    setModal({ open: true, id: article?._id ?? null });
    setForm(article ? {
      slug: article.slug,
      title: article.title,
      paragraphs: article.paragraphs?.join('\n') || '',
      isActive: article.isActive,
      image: article.image || null,
    } : { ...blankForm });
    setImagePreview(article?.image ? `http://localhost:5000${article.image}` : null);
    setImageFile(null);
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setForm({ ...blankForm });
    setImagePreview(null);
    setImageFile(null);
    setErrors({});
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.slug.trim()) nextErrors.slug = 'Slug is required.';
    if (!form.title.trim()) nextErrors.title = 'Title is required.';
    if (!form.paragraphs.trim()) nextErrors.paragraphs = 'At least one paragraph is required.';
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('slug', form.slug.trim());
      formData.append('title', form.title.trim());
      formData.append('paragraphs', JSON.stringify(
        form.paragraphs.split('\n').filter((p) => p.trim())
      ));
      formData.append('isActive', form.isActive === true || form.isActive === 'true');
      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (modal.id) {
        await axios.put(`${API_URL}/${modal.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post(API_URL, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      await loadArticles();
      closeModal();
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving article.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      await loadArticles();
    } catch (err) {
      setError('Error deleting article.');
    }
  };

  const toggleStatus = async (id, isActive) => {
    try {
      await axios.put(`${API_URL}/${id}`, { isActive: !isActive });
      await loadArticles();
    } catch (err) {
      setError('Error toggling article status.');
    }
  };

  const filteredArticles = articles.filter((article) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      article.title?.toLowerCase().includes(q) ||
      article.slug?.toLowerCase().includes(q);
    const matchStatus =
      filterStatus === '' ? true
      : filterStatus === 'active' ? article.isActive
      : !article.isActive;
    return matchSearch && matchStatus;
  });

  const columns = [
    {
      field: 'image', headerName: 'Image', width: 80,
      renderCell: (params) => params.row.image ? (
        <img
          src={`http://localhost:5000${params.row.image}`}
          alt={params.row.title}
          style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
        />
      ) : '—',
    },
    {
      field: 'id', headerName: 'ID', width: 80,
      valueGetter: (params) => params.row._id?.slice(-5).toUpperCase(),
    },
    { field: 'slug', headerName: 'Slug', width: 150 },
    { field: 'title', headerName: 'Title', width: 200 },
    {
      field: 'paragraphs', headerName: 'Paragraphs', width: 120,
      valueGetter: (params) => params.row.paragraphs?.length || 0,
    },
    {
      field: 'preview', headerName: 'Preview', flex: 1, minWidth: 200,
      valueGetter: (params) => params.row.paragraphs?.[0]?.slice(0, 60) + '...' || '',
    },
    {
      field: 'isActive', headerName: 'Status', width: 120, sortable: false,
      renderCell: (params) => (
        <Chip
          size="small" variant="outlined"
          color={params.row.isActive ? 'success' : 'warning'}
          label={params.row.isActive ? 'Active' : 'Inactive'}
        />
      ),
    },
    {
      field: 'actions', headerName: 'Actions', width: 220, sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={0.5} sx={{ py: 0.3 }}>
          <Button size="small" variant="outlined"
            onClick={() => openModal(params.row)}>Edit</Button>
          <Button size="small" variant="contained"
            color={params.row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(params.row._id, params.row.isActive)}>
            {params.row.isActive ? 'Disable' : 'Activate'}
          </Button>
          <Button size="small" variant="contained" color="error"
            onClick={() => handleDelete(params.row._id)}>Delete</Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4">Articles</Typography>
        <Button variant="contained" onClick={() => openModal()}>Add Article</Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
        <TextField size="small" placeholder="Search Articles..." value={search}
          onChange={(e) => setSearch(e.target.value)} sx={{ flex: 2 }} />
        <TextField select size="small" label="Status Filter" value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)} sx={{ flex: 1 }}>
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>
      </Stack>

      <Paper sx={{ p: 2 }}>
        {articles.length === 0 ? (
          <Alert severity="info">No articles found. Click Add Article to create one.</Alert>
        ) : (
          <Box sx={{ width: '100%' }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              autoHeight
              initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
              getRowId={(row) => row._id}
              sx={{ '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' } }}
            />
          </Box>
        )}
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? 'Edit Article' : 'Add Article'}</DialogTitle>
          <DialogContent dividers sx={{ pt: 2, pb: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField
                name="slug" label="Slug" value={form.slug}
                onChange={handleChange} fullWidth
                error={Boolean(errors.slug)} helperText={errors.slug}
              />
              <TextField
                name="title" label="Title" value={form.title}
                onChange={handleChange} fullWidth
                error={Boolean(errors.title)} helperText={errors.title}
              />
              <TextField
                name="paragraphs" label="Paragraphs (one per line)"
                value={form.paragraphs} onChange={handleChange}
                fullWidth multiline rows={6}
                error={Boolean(errors.paragraphs)}
                helperText={errors.paragraphs || 'Enter each paragraph on a new line'}
              />
              <TextField
                select name="isActive" label="Status"
                value={form.isActive} onChange={handleChange} fullWidth
              >
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
              </TextField>

              {/* Image Upload */}
              <Box>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Article Image
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ marginBottom: 8 }}
                />
                {imagePreview && (
                  <Box mt={1}>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                )}
              </Box>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update Article' : 'Save Article'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;