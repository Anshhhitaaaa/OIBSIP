
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', type: 'base', quantity: 50, price: 0 });
  const { user } = useAuth();

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await axios.get('/api/inventory');
      setInventory(res.data);
    };
    fetchInventory();
  }, []);

  const handleAddItem = async (e) => {
    e.preventDefault();
    await axios.post('/api/inventory', newItem);
    setNewItem({ name: '', type: 'base', quantity: 50, price: 0 });
    const res = await axios.get('/api/inventory');
    setInventory(res.data);
  };

  const handleUpdateQuantity = async (id, qty) => {
    await axios.put(`/api/inventory/${id}`, { quantity: qty });
    const res = await axios.get('/api/inventory');
    setInventory(res.data);
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
          Admin Dashboard - Inventory
        </h1>
        <Link
          to="/admin/orders"
          className="btn btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Manage Orders
        </Link>
      </div>

      {/* Add New Item Form */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#111827', marginBottom: '1.5rem' }}>
          Add New Inventory Item
        </h3>
        <form
          onSubmit={handleAddItem}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <input
            type="text"
            placeholder="Item Name"
            className="input"
            style={{ flex: 1, minWidth: '200px' }}
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <select
            className="input"
            style={{ width: '150px' }}
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
          >
            <option value="base">Base</option>
            <option value="sauce">Sauce</option>
            <option value="cheese">Cheese</option>
            <option value="vegetable">Vegetable</option>
          </select>
          <input
            type="number"
            placeholder="Quantity"
            className="input"
            style={{ width: '150px' }}
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Price (₹)"
            className="input"
            style={{ width: '150px' }}
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
          />
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      </div>

      {/* Inventory List */}
      <div className="card">
        <h3 style={{ color: '#111827', marginBottom: '1.5rem' }}>Current Inventory</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#fef2f2' }}>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#111827',
                    fontWeight: '700'
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#111827',
                    fontWeight: '700'
                  }}
                >
                  Type
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#111827',
                    fontWeight: '700'
                  }}
                >
                  Quantity
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#111827',
                    fontWeight: '700'
                  }}
                >
                  Price
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#111827',
                    fontWeight: '700'
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr
                  key={item._id}
                  style={{ borderBottom: '1px solid #e5e7eb' }}
                >
                  <td style={{ padding: '1rem', fontWeight: '600' }}>
                    {item.name}
                  </td>
                  <td style={{ padding: '1rem', textTransform: 'capitalize' }}>
                    {item.type}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span
                      style={{
                        fontWeight: '700',
                        color: item.quantity < 20 ? '#dc2626' : '#059669'
                      }}
                    >
                      {item.quantity}
                      {item.quantity < 20 && ' ⚠️'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>
                    ₹{item.price}
                  </td>
                  <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 10)}
                      className="btn btn-secondary"
                      style={{ padding: '0.5rem 1rem' }}
                    >
                      +10
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
