
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">🍕 PizzaHub</Link>
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/custom" className="nav-link">Build Pizza</Link>
              <Link to="/cart" className="nav-link">
                Cart ({cart.length})
              </Link>
              <Link to="/orders" className="nav-link">My Orders</Link>
              {user.isAdmin && (
                <Link to="/admin/dashboard" className="nav-link">Admin</Link>
              )}
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">User Login</Link>
              <Link to="/admin/login" className="nav-link">Admin Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
