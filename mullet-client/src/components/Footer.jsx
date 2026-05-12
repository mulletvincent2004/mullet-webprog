import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-sm font-semibold">Tealive Philippines</h3>
            <p className="text-xs text-purple-200">
              Brewing Positivity — Smile Every Sip
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/tealiveph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/tealiveph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tealive.com.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Website
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-purple-600 text-center text-xs text-purple-200">
          <p>&copy; 2026 Tealive Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
