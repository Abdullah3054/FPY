import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../UI/Button';
import './header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header-wrap sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-primary">SLMS</Link>
        <div className="flex items-center gap-3">
          <Link to="/courses">Courses</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/contact">Contact</Link>
          {user ? (
            <Button onClick={logout} variant="secondary">Logout</Button>
          ) : (
            <Link to="/login"><Button>Login</Button></Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
