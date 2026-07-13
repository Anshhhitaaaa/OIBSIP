
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Card from '../components/ui/Card';
import OrderStatusTracker from '../components/OrderStatusTracker';
import { useOrder } from '../context/OrderContext';

const OrderTracking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders, activeOrder, loading } = useOrder();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Find the order by _id
    const foundOrder = orders.find(o => o._id === id) || (activeOrder && activeOrder._id === id ? activeOrder : null);
    setOrder(foundOrder);
  }, [id, orders, activeOrder]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-char-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-charcoal/70">Loading order...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center">
        <div className="text-charcoal/70">Order not found</div>
      </div>
    );
  }

  const currentStatus = order.status;
  const isDelivered = currentStatus === 'Delivered';

  const estimatedDelivery = new Date(Date.now() + 25 * 60 * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

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
        <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-2 text-center">
          Order #{order._id.slice(-6).toUpperCase()}
        </h1>
        <p className="text-charcoal/70 text-center mb-12">
          {new Date(order.createdAt).toLocaleString()}
        </p>

        {/* Status Tracker */}
        <Card className="p-8 mb-8">
          <OrderStatusTracker status={currentStatus} />
        </Card>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="font-fraunces text-xl font-bold text-charcoal mb-4">
              Order Details
            </h2>
            <div className="space-y-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-charcoal">Pizza {i + 1}</p>
                    <p className="text-charcoal/60 text-sm">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-fraunces text-xl font-bold text-charcoal mb-4">
              Delivery Information
            </h2>
            <div className="space-y-2 text-charcoal/80">
              <p><strong>Estimated Delivery:</strong> {estimatedDelivery}</p>
              <p><strong>Total:</strong> <span className="font-ibmMono font-bold text-char-orange">₹{order.total}</span></p>
            </div>
          </Card>
        </div>

        {isDelivered && (
          <div className="mt-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <p className="text-charcoal/80">Your order has been delivered! Enjoy your pizza!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderTracking;
