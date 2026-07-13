
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [admin, setAdmin] = useState(null);
  const [adminToken, setAdminToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    const savedAdmin = localStorage.getItem('admin');
    if (savedToken && savedAdmin) {
      setAdminToken(savedToken);
      setAdmin(JSON.parse(savedAdmin));
    }
    // Also check if regular user is admin
    else if (user && user.isAdmin) {
      setAdmin(user);
      setAdminToken(token);
    }
    setIsLoading(false);
  }, [user, token]);

  const login = async (email, password) => {
    // Mock admin login
    const mockAdmin = {
      id: 'a1',
      name: 'Admin User',
      email,
      isAdmin: true
    };
    const mockToken = 'mock-admin-jwt-' + Date.now();
    
    localStorage.setItem('adminToken', mockToken);
    localStorage.setItem('admin', JSON.stringify(mockAdmin));
    setAdmin(mockAdmin);
    setAdminToken(mockToken);
    
    return mockAdmin;
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('admin');
    setAdmin(null);
    setAdminToken(null);
  };

  const value = {
    admin,
    adminToken,
    isLoading,
    login,
    logout
  };

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
