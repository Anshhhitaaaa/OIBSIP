
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUserOrders } from '../data/mockData';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedActiveOrder = localStorage.getItem('forno_active_order');
    if (savedActiveOrder) {
      setActiveOrder(JSON.parse(savedActiveOrder));
    }
    const savedOrders = localStorage.getItem('forno_orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
    const savedCart = localStorage.getItem('forno_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (activeOrder) {
      localStorage.setItem('forno_active_order', JSON.stringify(activeOrder));
    } else {
      localStorage.removeItem('forno_active_order');
    }
  }, [activeOrder]);

  useEffect(() => {
    localStorage.setItem('forno_orders', JSON.stringify(orders));
  }, [orders]);

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

  const placeOrder = (orderData) => {
    const newOrder = {
      id: 'o' + Date.now(),
      ...orderData,
      status: 'Order Received',
      createdAt: new Date().toISOString()
    };
    setOrders([newOrder, ...orders]);
    setActiveOrder(newOrder);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status } : o));
    if (activeOrder && activeOrder.id === orderId) {
      setActiveOrder({ ...activeOrder, status });
    }
  };

  const clearActiveOrder = () => {
    setActiveOrder(null);
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
        setOrders
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
