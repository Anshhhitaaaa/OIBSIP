
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useOrder } from '../context/OrderContext';

const OrderSummary = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const { cart, appliedCoupon } = useOrder();
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discount.includes('%')) {
      const percentage = parseInt(appliedCoupon.discount);
      discount = (subtotal * percentage) / 100;
    } else if (appliedCoupon.discount === 'BOGO') {
      if (cart.length >= 2) {
        const prices = cart.map(item => item.price).sort((a, b) => a - b);
        discount = prices[0];
      }
    }
  }
  
  const total = Math.max(0, subtotal - discount);

  if (cart.length === 0) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <UserNavbar />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-6 transition-colors"
        >
          ← Back to Cart
        </button>
        <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-8">
          Order Summary
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="space-y-6">
            {cart.map((pizza, index) => (
              <Card key={`${pizza.id}-${index}`} className="p-6">
                <h2 className="font-fraunces text-xl font-bold text-charcoal mb-4">
                  {pizza.name}
                </h2>
                {pizza.image && (
                  <img 
                    src={pizza.image} 
                    alt={pizza.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="space-y-3 text-charcoal/80">
                  {pizza.base && <p><strong>Base:</strong> {pizza.base}</p>}
                  {pizza.sauce && <p><strong>Sauce:</strong> {pizza.sauce}</p>}
                  {pizza.cheese && <p><strong>Cheese:</strong> {pizza.cheese}</p>}
                  {pizza.vegetables && pizza.vegetables.length > 0 && (
                    <p>
                      <strong>Veggies:</strong> {pizza.vegetables.join(', ')}
                    </p>
                  )}
                </div>
                <div className="mt-4 pt-4 border-t border-charcoal/10">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-charcoal">Price</span>
                    <span className="font-ibmMono font-bold text-char-orange">
                      ₹{pizza.price}
                    </span>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-mozzarella/20 border-mozzarella">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal/70">Subtotal</span>
                  <span className="font-ibmMono font-semibold text-charcoal">₹{subtotal}</span>
                </div>
                {appliedCoupon && discount > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>
                      Discount ({appliedCoupon.code})
                    </span>
                    <span className="font-ibmMono font-semibold">
                      -₹{Math.round(discount)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-charcoal/10">
                <span className="text-xl font-semibold text-charcoal">Total</span>
                <span className="font-ibmMono text-3xl font-bold text-char-orange">
                  ₹{Math.round(total)}
                </span>
              </div>
            </Card>
          </div>

          {/* Delivery Details */}
          <div>
            <Card className="p-6">
              <h2 className="font-fraunces text-xl font-bold text-charcoal mb-6">
                Delivery Information
              </h2>
              <div className="space-y-4">
                <Input
                  label="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Pizza Street, Food City"
                  required
                />
                <Input
                  label="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <Button
                className="w-full mt-8"
                size="lg"
                onClick={() => navigate('/checkout', { 
                  state: { 
                    cart, 
                    total: Math.round(total), 
                    address, 
                    phone, 
                    appliedCoupon,
                    discount: Math.round(discount)
                  } 
                })}
                disabled={!address || !phone}
              >
                Proceed to Payment
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSummary;
