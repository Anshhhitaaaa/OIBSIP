
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import Button from './ui/Button';
import { Flame } from 'lucide-react';

const AdminNavbar = () => {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();

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
              to="/admin/dashboard" 
              className="text-warm-cream/80 hover:text-warm-cream font-medium"
            >
              Dashboard
            </Link>
            <Link 
              to="/admin/inventory" 
              className="text-warm-cream/80 hover:text-warm-cream font-medium"
            >
              Inventory
            </Link>
            <Link 
              to="/admin/orders" 
              className="text-warm-cream/80 hover:text-warm-cream font-medium"
            >
              Orders
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
