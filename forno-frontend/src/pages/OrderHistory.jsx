
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import OrderStatusTracker from '../components/OrderStatusTracker';
import { useOrder } from '../context/OrderContext';

const OrderHistory = () => {
  const navigate = useNavigate();
  const { orders, loading } = useOrder();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-char-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-charcoal/70">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <UserNavbar />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-6 transition-colors"
        >
          ← Back to Menu
        </button>
        <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍕</div>
            <h2 className="font-fraunces text-2xl font-bold text-charcoal mb-2">
              No Orders Yet
            </h2>
            <p className="text-charcoal/70 mb-8">
              Time to order your first delicious wood-fired pizza!
            </p>
            <Link to="/dashboard">
              <Button size="lg">Browse Menu</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order._id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="font-ibmMono font-bold text-xl text-charcoal mb-1">
                      Order #{order._id.slice(-6).toUpperCase()}
                    </p>
                    <p className="text-charcoal/70 text-sm">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-ibmMono font-bold text-2xl text-char-orange">
                      ₹{order.total}
                    </span>
                    <Badge variant={
                      order.status === 'Delivered' ? 'success' :
                      order.status === 'Sent to Delivery' ? 'success' :
                      order.status === 'In Kitchen' ? 'warning' : 'default'
                    }>
                      {order.status}
                    </Badge>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {order.items && order.items.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="text-sm text-charcoal/70 bg-mozzarella/30 px-2 py-1 rounded">
                        Pizza
                      </div>
                    ))}
                    {order.items && order.items.length > 3 && (
                      <div className="text-sm text-charcoal/50">+{order.items.length - 3} more</div>
                    )}
                  </div>
                </div>

                {order.status !== 'Delivered' && (
                  <div className="mb-4">
                    <OrderStatusTracker status={order.status} />
                  </div>
                )}

                <div className="flex gap-3 justify-end">
                  <Link to={`/orders/${order._id}`}>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </Link>
                  {order.status === 'Delivered' && (
                    <Button size="sm">Reorder</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;
