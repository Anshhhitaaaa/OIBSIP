
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const statuses = ['Order Received', 'In Kitchen', 'Sent to Delivery', 'Delivered'];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get('/api/orders');
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  const updateStatus = async (id, newStatus) => {
    await axios.put(`/api/orders/${id}/status`, { status: newStatus });
    const res = await axios.get('/api/orders');
    setOrders(res.data);
  };

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

  if (!user?.isAdmin)
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <span style={{ fontSize: '5rem' }}>🔒</span>
        <h1 className="title" style={{ marginTop: '1.5rem' }}>
          Not Authorized
        </h1>
        <p className="subtitle">
          You need admin privileges to access this page.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className="container" style={{ maxWidth: '1200px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <h1 className="title" style={{ margin: 0 }}>
          Admin - Manage Orders
        </h1>
        <Link
          to="/admin/dashboard"
          className="btn btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Inventory
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {orders.map((order) => (
          <div key={order._id} className="card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <h3 style={{ color: '#111827', marginBottom: '0.5rem', fontSize: '1.3rem' }}>
                  Order #{order._id.slice(-6)}
                </h3>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  Customer: <strong>{order.user?.name}</strong> ({order.user?.email})
                </p>
              </div>

              <select
                value={order.status}
                onChange={(e) => updateStatus(order._id, e.target.value)}
                className="input"
                style={{ width: '200px', margin: 0 }}
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className={`status-badge ${getStatusClass(order.status)}`}>
                {order.status}
              </span>
              <p style={{ color: '#4b5563', margin: 0, fontWeight: '600' }}>
                Total: <span style={{ color: '#dc2626', fontSize: '1.5rem' }}>₹{order.total}</span>
              </p>
            </div>

            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Ordered on: {new Date(order.createdAt).toLocaleString()}
            </p>

            <div
              style={{
                borderTop: '1px solid #e5e7eb',
                paddingTop: '1rem'
              }}
            >
              <p style={{ color: '#4b5563', fontWeight: '600', marginBottom: '0.75rem' }}>
                Items ({order.items.length}):
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: '0.75rem',
                      borderRadius: '0.75rem',
                      flex: '1',
                      minWidth: '200px'
                    }}
                  >
                    <p style={{ color: '#111827', fontWeight: '600', marginBottom: '0.5rem' }}>
                      🍕 Pizza {idx + 1}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      Base: {item.base}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      Sauce: {item.sauce}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      Cheese: {item.cheese}
                    </p>
                    {item.vegetables?.length > 0 && (
                      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        Veggies: {item.vegetables.join(', ')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
