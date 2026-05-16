import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/styles/tealive.png';

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-purple-700 ${
      isActive ? 'text-purple-700 underline underline-offset-4' : 'text-zinc-500'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-purple-900 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={logo} alt="Tealive" className="h-8 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/articles" className={linkClass}>Articles</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/auth/signin" className="rounded-full border-2 border-purple-700 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-700 hover:text-white">
            Log In
          </Link>
          <Link to="/auth/signup" className="rounded-full bg-purple-700 border-2 border-purple-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-900 hover:border-purple-900">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;