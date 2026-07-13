
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';
import Button from './ui/Button';
import { ShoppingCart, User, Flame, MapPin, ChevronDown } from 'lucide-react';

const UserNavbar = () => {
  const { user, logout } = useAuth();
  const { activeOrder, cart } = useOrder();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-charcoal/10 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-char-orange" />
          <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
        </Link>
        
        {user && (
          <div className="flex items-center gap-6">
            <Link to="/menu" className="text-charcoal/70 hover:text-charcoal font-medium">
              Menu
            </Link>
            <Link to="/builder" className="text-charcoal/70 hover:text-charcoal font-medium">
              Build Your Own
            </Link>
            <Link to="/orders" className="text-charcoal/70 hover:text-charcoal font-medium">
              My Orders
            </Link>
            
            {user.isAdmin && (
              <Link to="/admin/dashboard" className="text-char-orange hover:text-char-orange/80 font-semibold">
                Admin Dashboard
              </Link>
            )}
            
            {activeOrder && (
              <Link to={`/orders/${activeOrder._id}`} className="flex items-center gap-1 text-char-orange font-semibold hover:opacity-80 transition-opacity">
                <MapPin className="w-4 h-4" />
                <span>Track Order</span>
              </Link>
            )}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-charcoal" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-char-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-charcoal/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-char-orange text-white flex items-center justify-center font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-charcoal font-medium">{user.name}</span>
                <ChevronDown className="w-4 h-4 text-charcoal/70" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-charcoal/10 rounded-lg shadow-lg overflow-hidden z-50">
                  <Link
                    to="/orders"
                    className="block px-4 py-3 text-charcoal hover:bg-charcoal/5 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                  {activeOrder && (
                    <Link
                      to={`/orders/${activeOrder._id}`}
                      className="block px-4 py-3 text-charcoal hover:bg-charcoal/5 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Track Order
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-charcoal/5 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default UserNavbar;
