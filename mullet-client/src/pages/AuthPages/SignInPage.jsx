import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { loginUser } from '../../services/UserService';

const inputClasses =
  'mt-1 w-full rounded-xl border-2 border-purple-200 bg-purple-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-purple-700 focus:bg-white focus:ring-2 focus:ring-purple-700/10';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });

      // Enhancement 1 — Viewers cannot log in
      if (data.type === 'viewer') {
        setError('Viewers are not allowed to log in.');
        return;
      }

      // Save user info to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.firstName);
      localStorage.setItem('type', data.type);

      // Navigate to dashboard
      navigate('/dashboard', { state: { firstName: data.firstName, type: data.type } });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <>
      <div className="mb-8">
        <span className="inline-block rounded-full border border-purple-300 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">
          Welcome back
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Log In</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Access your account and start brewing positivity.
        </p>
      </div>

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <label htmlFor="signin-email" className="text-sm font-semibold text-zinc-700">Email Address</label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-semibold text-zinc-700">Password</label>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="mt-2 text-xs leading-5 text-zinc-400">Must be a combination of minimum 8 letters, numbers, and symbols.</p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-purple-300 accent-purple-700" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-purple-700 transition hover:text-purple-900 underline underline-offset-2">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className="w-full py-3 text-[11px] tracking-[0.2em]">
          Log In
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-200" />
          </div>
          <div className="relative flex justify-center text-xs text-zinc-400 bg-zinc-50 px-2 w-fit mx-auto">
            or continue with
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="outline" className="w-full py-3 text-[11px] tracking-[0.2em]">Google</Button>
          <Button type="button" variant="outline" className="w-full py-3 text-[11px] tracking-[0.2em]">Apple</Button>
        </div>
      </form>

      <div className="mt-8 border-t border-purple-200 pt-6 text-sm text-zinc-500 text-center">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-purple-700 transition hover:text-purple-900 underline underline-offset-2">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;