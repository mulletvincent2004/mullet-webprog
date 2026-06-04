import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const inputClasses =
  'mt-1 w-full rounded-xl border-2 border-purple-200 bg-purple-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-purple-700 focus:bg-white focus:ring-2 focus:ring-purple-700/10';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    contactNumber: '',
    email: '',
    username: '',
    password: '',
    address: '',
    type: 'viewer',
    isActive: true,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (!/^\d{11}$/.test(form.contactNumber)) {
      setError('Contact number must be 11 digits.');
      return;
    }
    if (!/^\d+$/.test(form.age)) {
      setError('Age must be a number only.');
      return;
    }
    if (/\s/.test(form.username)) {
      setError('Username must not contain spaces.');
      return;
    }

    try {
      await createUser(form);
      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => navigate('/auth/signin'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Sign up failed. Please try again.');
    }
  };

  return (
    <>
      <div className="mb-8">
        <span className="inline-block rounded-full border border-purple-300 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">
          Get started
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Create your account and join the Tealive community.
        </p>
      </div>

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-600">
          {success}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-semibold text-zinc-700">First Name</label>
            <input id="first-name" name="firstName" type="text" placeholder="Juan"
              autoComplete="given-name" className={inputClasses}
              value={form.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-semibold text-zinc-700">Last Name</label>
            <input id="last-name" name="lastName" type="text" placeholder="dela Cruz"
              autoComplete="family-name" className={inputClasses}
              value={form.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className="text-sm font-semibold text-zinc-700">Age</label>
            <input id="age" name="age" type="text" placeholder="21"
              className={inputClasses} value={form.age} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="contact" className="text-sm font-semibold text-zinc-700">Contact Number</label>
            <input id="contact" name="contactNumber" type="text" placeholder="09XXXXXXXXX"
              className={inputClasses} value={form.contactNumber} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="username" className="text-sm font-semibold text-zinc-700">Username</label>
            <input id="username" name="username" type="text" placeholder="juandelacruz"
              className={inputClasses} value={form.username} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="signup-email" className="text-sm font-semibold text-zinc-700">Email</label>
            <input id="signup-email" name="email" type="email" placeholder="you@example.com"
              autoComplete="email" className={inputClasses}
              value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="text-sm font-semibold text-zinc-700">Address</label>
          <input id="address" name="address" type="text" placeholder="123 Street, City"
            className={inputClasses} value={form.address} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-semibold text-zinc-700">Password</label>
          <input id="signup-password" name="password" type="password" placeholder="••••••••"
            autoComplete="new-password" className={inputClasses}
            value={form.password} onChange={handleChange} required />
          <p className="mt-2 text-xs leading-5 text-zinc-400">Use a secure password with letters, numbers, and symbols.</p>
        </div>

        <div className="flex items-start gap-2 text-sm text-zinc-500">
          <input type="checkbox" id="terms" required
            className="mt-0.5 h-4 w-4 rounded border-purple-300 accent-purple-700 cursor-pointer" />
          <label htmlFor="terms" className="cursor-pointer leading-5">
            I agree to the{' '}
            <span className="font-semibold text-purple-700 underline underline-offset-2 cursor-pointer">Terms of Service</span>{' '}
            and{' '}
            <span className="font-semibold text-purple-700 underline underline-offset-2 cursor-pointer">Privacy Policy</span>
          </label>
        </div>

        <Button type="submit" variant="primary" className="w-full py-3 text-[11px] tracking-[0.2em]">
          Create Account
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-200" />
          </div>
          <div className="relative flex justify-center text-xs text-zinc-400 bg-zinc-50 px-2 w-fit mx-auto">
            or sign up with
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button type="button" variant="outline" className="w-full py-3 text-[11px] tracking-[0.2em]">Google</Button>
          <Button type="button" variant="outline" className="w-full py-3 text-[11px] tracking-[0.2em]">Apple</Button>
        </div>
      </form>

      <div className="mt-8 border-t border-purple-200 pt-6 text-sm text-zinc-500 text-center">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-purple-700 transition hover:text-purple-900 underline underline-offset-2">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;