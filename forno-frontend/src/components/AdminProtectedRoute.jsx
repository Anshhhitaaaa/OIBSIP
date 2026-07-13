
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useAuth } from '../context/AuthContext';

const AdminProtectedRoute = ({ children }) => {
  const { admin, isLoading: adminLoading } = useAdminAuth();
  const { user, isLoading: userLoading } = useAuth();

  if (adminLoading || userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-char-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-warm-cream/70">Loading...</p>
        </div>
      </div>
    );
  }

  const isAdmin = admin || (user && user.isAdmin);
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
