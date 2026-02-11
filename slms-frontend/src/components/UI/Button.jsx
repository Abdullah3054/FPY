const variants = {
  primary: 'bg-primary text-white hover:bg-blue-700',
  secondary: 'bg-white border border-blue-200 text-primary hover:bg-blue-50'
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => (
  <button className={`px-4 py-2 rounded-lg font-medium transition ${variants[variant]} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
