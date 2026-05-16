import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', type = 'button', className = '', onClick, to }) => {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none cursor-pointer';

  const variants = {
    primary: 'bg-purple-700 text-white border-2 border-purple-700 rounded-full px-6 py-2 hover:bg-purple-900 hover:border-purple-900',
    secondary: 'bg-white text-purple-700 border-2 border-white rounded-full px-6 py-2 hover:bg-purple-50 hover:text-purple-900',
    outline: 'bg-transparent text-purple-700 border-2 border-purple-700 rounded-full px-6 py-2 hover:bg-purple-700 hover:text-white',
    ghost: 'bg-transparent text-purple-700 rounded-full px-6 py-2 hover:bg-purple-100',
    danger: 'bg-red-600 text-white border-2 border-red-600 rounded-full px-6 py-2 hover:bg-red-700',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;