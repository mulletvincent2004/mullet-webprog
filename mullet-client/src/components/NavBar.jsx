import { NavLink } from 'react-router-dom';
import logo from '../assets/styles/tealive.png';

const links = [
    { label: 'Home', to: '/'},
    { label: 'About', to: '/about'},
    { label: 'Articles', to: '/articles'},
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300',
    isActive
      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
      : 'text-zinc-500 hover:text-indigo-600 hover:bg-indigo-50',
  ].join(' ');

const NavBar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <NavLink to="/" className="flex items-center gap-3">
                <img src={logo} alt="Company Logo" className="h-8 w-auto object-contain" />
                </NavLink>

                <nav className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} end={link.to === '/'}
                        className={navLinkClassName}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default NavBar