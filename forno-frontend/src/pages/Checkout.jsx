
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { useOrder } from '../context/OrderContext';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { placeOrder } = useOrder();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [newOrderId, setNewOrderId] = useState(null);
  const { cart, total, address, phone } = location.state || {};

  if (!cart || cart.length === 0) {
    navigate('/dashboard');
    return null;
  }

  const handlePaymentSuccess = async () => {
    setShowModal(false);
    setIsProcessing(true);
    
    // Place the order
    const newOrder = placeOrder({
      items: cart,
      total,
      address,
      phone
    });
    
    setNewOrderId(newOrder.id);
    setIsProcessing(false);
    setPaymentSuccess(true);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-warm-cream flex flex-col">
        <UserNavbar />
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <Card className="max-w-lg w-full p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-4">
              Payment Successful!
            </h1>
            <p className="text-charcoal/70 mb-8">
              Your order has been placed successfully. You can track your order now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/orders/${newOrderId}`} className="flex-1">
                <Button className="w-full" size="lg">
                  View Order Details
                </Button>
              </Link>
              <Link to="/dashboard" className="flex-1">
                <Button variant="ghost" className="w-full" size="lg">
                  Back to Menu
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <UserNavbar />
      <div className="flex-1 max-w-2xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/order-summary')}
          className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-6 transition-colors"
        >
          ← Back to Order Summary
        </button>
        <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-8 text-center">
          Checkout
        </h1>

        <Card className="p-8">
          <div className="text-center mb-8">
            <p className="text-charcoal/70 mb-2">Amount to Pay</p>
            <p className="font-ibmMono text-5xl font-bold text-char-orange">
              ₹{total}
            </p>
          </div>

          <Button
            className="w-full"
            size="xl"
            onClick={() => setShowModal(true)}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay with Razorpay'}
          </Button>
        </Card>

        {/* Mock Razorpay Modal */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="font-fraunces text-2xl font-bold text-charcoal mb-2">
                Razorpay Payment
              </h2>
              <p className="text-charcoal/70">
                Test Mode - Simulate a payment
              </p>
              <p className="font-ibmMono text-3xl font-bold text-char-orange mt-2">
                ₹{total}
              </p>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full"
                variant="success"
                size="lg"
                onClick={handlePaymentSuccess}
              >
                Simulate Success
              </Button>
              <Button
                className="w-full"
                variant="danger"
                size="lg"
                onClick={() => setShowModal(false)}
              >
                Simulate Failure
              </Button>
            </div>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
