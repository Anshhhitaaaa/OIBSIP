
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import Button from './ui/Button';
import { Flame } from 'lucide-react';

const AdminNavbar = () => {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <nav className="bg-charcoal sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-char-orange" />
          <span className="font-fraunces text-2xl font-bold text-warm-cream">
            forno
          </span>
          <span className="text-xs font-semibold text-mozzarella ml-2">
            ADMIN
          </span>
        </Link>
        
        {admin && (
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`relative font-medium transition-colors ${
                isActive('/') 
                  ? 'text-warm-cream' 
                  : 'text-warm-cream/80 hover:text-warm-cream'
              }`}
            >
              Back to Site
              {isActive('/') && (
                <span className="absolute left-0 right-0 bottom-[-6px] h-1 bg-char-orange rounded-full" />
              )}
            </Link>
            <Link 
              to="/admin/dashboard" 
              className={`relative font-medium transition-colors ${
                isActive('/admin/dashboard') 
                  ? 'text-warm-cream' 
                  : 'text-warm-cream/80 hover:text-warm-cream'
              }`}
            >
              Dashboard
              {isActive('/admin/dashboard') && (
                <span className="absolute left-0 right-0 bottom-[-6px] h-1 bg-char-orange rounded-full" />
              )}
            </Link>
            <Link 
              to="/admin/inventory" 
              className={`relative font-medium transition-colors ${
                isActive('/admin/inventory') 
                  ? 'text-warm-cream' 
                  : 'text-warm-cream/80 hover:text-warm-cream'
              }`}
            >
              Inventory
              {isActive('/admin/inventory') && (
                <span className="absolute left-0 right-0 bottom-[-6px] h-1 bg-char-orange rounded-full" />
              )}
            </Link>
            <Link 
              to="/admin/orders" 
              className={`relative font-medium transition-colors ${
                isActive('/admin/orders') 
                  ? 'text-warm-cream' 
                  : 'text-warm-cream/80 hover:text-warm-cream'
              }`}
            >
              Orders
              {isActive('/admin/orders') && (
                <span className="absolute left-0 right-0 bottom-[-6px] h-1 bg-char-orange rounded-full" />
              )}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-warm-cream font-medium">{admin.name}</span>
              <Button variant="ghost" onClick={handleLogout} size="sm" className="text-warm-cream hover:bg-warm-cream/10">
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
