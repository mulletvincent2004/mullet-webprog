import { Link } from 'react-router-dom';
import logo from '../assets/styles/tealive.png';


const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-purple-700 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Branding */}
          <div>
            <img src={logo} alt="Tealive" className="h-10 w-auto object-contain mb-3" />
            <p className="text-xs leading-6 text-purple-200">
              Brewing Positivity — Smile Every Sip. Southeast Asia's No. 1 lifestyle tea brand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-3">Navigate</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-purple-200 hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-purple-200 hover:text-yellow-300 transition-colors">About</Link></li>
              <li><Link to="/articles" className="text-sm text-purple-200 hover:text-yellow-300 transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/tealiveph/" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-purple-200 hover:text-yellow-300 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tealiveph/" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-purple-200 hover:text-yellow-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tealive.com.ph/" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-purple-200 hover:text-yellow-300 transition-colors">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-purple-600 pt-6 text-center text-xs text-purple-300">
          &copy; 2026 Tealive Philippines. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;