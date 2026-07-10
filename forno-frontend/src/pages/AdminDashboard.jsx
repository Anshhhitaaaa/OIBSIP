
import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Card from '../components/ui/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { mockInventory, mockOrders } from '../data/mockData';
import { DollarSign, Package, Clock, AlertTriangle } from 'lucide-react';

const orderStats = [
  { name: 'Mon', orders: 45, revenue: 22500 },
  { name: 'Tue', orders: 52, revenue: 26000 },
  { name: 'Wed', orders: 48, revenue: 24000 },
  { name: 'Thu', orders: 65, revenue: 32500 },
  { name: 'Fri', orders: 78, revenue: 39000 },
  { name: 'Sat', orders: 92, revenue: 46000 },
  { name: 'Sun', orders: 85, revenue: 42500 }
];

const lowStockItems = mockInventory.filter(item => item.stock < item.threshold);

const AdminDashboard = () => {
  const totalOrdersToday = mockOrders.length;
  const totalRevenueToday = mockOrders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="min-h-screen bg-charcoal/5">
      <AdminNavbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-8">
          Admin Dashboard
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal/60 text-sm font-medium">Orders Today</p>
                <p className="font-ibmMono text-3xl font-bold text-charcoal">
                  {totalOrdersToday}
                </p>
              </div>
              <div className="p-3 bg-char-orange/10 rounded-xl">
                <Package className="w-8 h-8 text-char-orange" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal/60 text-sm font-medium">Revenue Today</p>
                <p className="font-ibmMono text-3xl font-bold text-basil-green">
                  ₹{totalRevenueToday.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-basil-green/10 rounded-xl">
                <DollarSign className="w-8 h-8 text-basil-green" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal/60 text-sm font-medium">Pending Orders</p>
                <p className="font-ibmMono text-3xl font-bold text-char-orange">
                  {mockOrders.filter(o => o.status !== 'Delivered').length}
                </p>
              </div>
              <div className="p-3 bg-char-orange/10 rounded-xl">
                <Clock className="w-8 h-8 text-char-orange" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal/60 text-sm font-medium">Low Stock Items</p>
                <p className="font-ibmMono text-3xl font-bold text-deep-tomato">
                  {lowStockItems.length}
                </p>
              </div>
              <div className="p-3 bg-deep-tomato/10 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-deep-tomato" />
              </div>
            </div>
          </Card>
        </div>

        {/* Low Stock Alerts */}
        {lowStockItems.length > 0 && (
          <Card className="p-6 mb-8 border-deep-tomato/30 bg-deep-tomato/5">
            <h3 className="font-fraunces text-xl font-bold text-deep-tomato mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Low Stock Alerts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lowStockItems.map(item => (
                <div key={item.id} className="p-4 bg-white rounded-lg border border-deep-tomato/20">
                  <p className="font-semibold text-charcoal">{item.name}</p>
                  <p className="text-sm text-charcoal/70">
                    <span className="font-ibmMono text-deep-tomato font-bold">
                      {item.stock} {item.unit}
                    </span>
                    {' '}left (threshold: {item.threshold} {item.unit})
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Orders Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="font-fraunces text-xl font-bold text-charcoal mb-6">
              Orders Over Time
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={orderStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px' }}
                  />
                  <Bar dataKey="orders" fill="#E8622C" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-fraunces text-xl font-bold text-charcoal mb-6">
              Recent Orders
            </h3>
            <div className="space-y-4">
              {mockOrders.slice(0, 3).map(order => (
                <div key={order.id} className="flex justify-between items-center p-4 bg-white/50 rounded-lg border border-charcoal/10">
                  <div>
                    <p className="font-semibold text-charcoal">{order.customer.name}</p>
                    <p className="text-sm text-charcoal/70">
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-ibmMono font-bold text-char-orange">
                      ₹{order.total}
                    </p>
                    <span className={`
                      text-xs px-2 py-1 rounded-full font-semibold
                      ${order.status === 'Order Received' ? 'bg-mozzarella text-charcoal' :
                        order.status === 'In Kitchen' ? 'bg-char-orange/10 text-char-orange' :
                        'bg-basil-green/10 text-basil-green'
                      }
                    `}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
