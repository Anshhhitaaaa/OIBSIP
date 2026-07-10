
import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Card from '../components/ui/Card';
import Select from '../components/ui/Select';
import Badge from '../components/ui/Badge';
import { mockOrders } from '../data/mockData';
import { orderStatuses } from '../data/mockData';

const AdminOrders = () => {
  const [orders, setOrders] = useState(mockOrders);

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-charcoal/5">
      <AdminNavbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-8">
          Order Management
        </h1>

        <div className="space-y-6">
          {orders.map(order => (
            <Card key={order.id} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-ibmMono font-bold text-xl text-charcoal">
                      Order #{order.id.slice(-6).toUpperCase()}
                    </h3>
                    <Badge variant={
                      order.status === 'Order Received' ? 'default' :
                      order.status === 'In Kitchen' ? 'warning' : 'success'
                    }>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-charcoal/70">
                    {order.customer.name} • {order.customer.email}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-ibmMono text-2xl font-bold text-char-orange">
                    ₹{order.total}
                  </span>
                  <Select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className="w-48"
                  >
                    {orderStatuses.map(status => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-4">
                <p className="text-sm text-charcoal/70 mb-3">Items:</p>
                <div className="flex flex-wrap gap-2">
                  {order.items.map((item, i) => (
                    <span key={i} className="bg-mozzarella/50 px-3 py-1 rounded-full text-sm">
                      {item.name || `Pizza ${i + 1}`}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
