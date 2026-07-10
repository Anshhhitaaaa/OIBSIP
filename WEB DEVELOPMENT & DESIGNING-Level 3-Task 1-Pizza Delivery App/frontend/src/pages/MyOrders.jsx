
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get('/api/orders/myorders');
      setOrders(res.data);
    };
    if (user) fetchOrders();
  }, [user]);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Order Received':
        return 'status-order-received';
      case 'In Kitchen':
        return 'status-order-received';
      case 'Sent to Delivery':
        return 'status-in-kitchen';
      case 'Delivered':
        return 'status-delivered';
      default:
        return 'status-order-received';
    }
  };

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      <h1 className="title">My Orders</h1>

      {orders.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '4rem' }}>
          <span style={{ fontSize: '5rem' }}>📦</span>
          <h2 style={{ color: '#111827', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            No Orders Yet!
          </h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>
            Time to order some delicious pizza!
          </p>
          <Link to="/custom" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Build Your Pizza
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {orders.map((order) => (
            <div key={order._id} className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <h3 style={{ color: '#111827', margin: 0, fontSize: '1.3rem' }}>
                  Order #{order._id.slice(-6)}
                </h3>
                <span className={`status-badge ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>

              <p style={{ color: '#4b5563', marginBottom: '0.5rem', fontWeight: '600' }}>
                Total: <span style={{ color: '#dc2626', fontSize: '1.5rem' }}>₹{order.total}</span>
              </p>

              <p style={{ color: '#6b7280', margin: 0 }}>
                Ordered on: {new Date(order.createdAt).toLocaleString()}
              </p>

              {order.items.length > 0 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                  <p style={{ color: '#4b5563', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Items:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {order.items.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: '#f3f4f6',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '0.5rem',
                          color: '#4b5563',
                          fontSize: '0.9rem'
                        }}
                      >
                        Pizza {idx + 1}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
