
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../lib/api';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, isLoading: authLoading } = useAuth();

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('forno_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Fetch orders from backend when user is authenticated
  useEffect(() => {
    const fetchOrders = async () => {
      if (user && !authLoading) {
        setLoading(true);
        try {
          const res = await api.get('/orders/myorders');
          setOrders(res.data);
          if (res.data.length > 0 && res.data[0].status !== 'Delivered') {
            setActiveOrder(res.data[0]);
          }
        } catch (err) {
          console.error('Failed to fetch orders', err);
        } finally {
          setLoading(false);
        }
      } else {
        setOrders([]);
        setActiveOrder(null);
      }
    };
    fetchOrders();
  }, [user, authLoading]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('forno_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = async (orderData) => {
    try {
      const res = await api.post('/orders', orderData);
      const newOrder = res.data;
      setOrders([newOrder, ...orders]);
      setActiveOrder(newOrder);
      clearCart();
      return newOrder;
    } catch (err) {
      console.error('Failed to place order', err);
      throw err;
    }
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(o => o._id === orderId ? { ...o, status } : o));
    if (activeOrder && activeOrder._id === orderId) {
      setActiveOrder({ ...activeOrder, status });
    }
  };

  const clearActiveOrder = () => {
    setActiveOrder(null);
  };

  const refetchOrders = async () => {
    if (user) {
      setLoading(true);
      try {
        const res = await api.get('/orders/myorders');
        setOrders(res.data);
        if (res.data.length > 0 && res.data[0].status !== 'Delivered') {
          setActiveOrder(res.data[0]);
        }
      } catch (err) {
        console.error('Failed to refetch orders', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        activeOrder,
        placeOrder,
        updateOrderStatus,
        clearActiveOrder,
        orders,
        setOrders,
        loading,
        refetchOrders
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
