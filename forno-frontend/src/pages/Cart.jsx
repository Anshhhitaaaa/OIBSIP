
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { useOrder } from '../context/OrderContext';
import { Trash2, X } from 'lucide-react';

const Cart = () => {
  const { 
    cart, 
    clearCart, 
    removeFromCart, 
    appliedCoupon, 
    availableCoupons, 
    applyCoupon, 
    removeCoupon 
  } = useOrder();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discount.includes('%')) {
      const percentage = parseInt(appliedCoupon.discount);
      discount = (subtotal * percentage) / 100;
    } else if (appliedCoupon.discount === 'BOGO') {
      // BOGO logic: take cheapest item free
      if (cart.length >= 2) {
        const prices = cart.map(item => item.price).sort((a, b) => a - b);
        discount = prices[0];
      }
    }
  }
  
  const total = Math.max(0, subtotal - discount);
  
  const handleApplyCoupon = () => {
    const coupon = availableCoupons.find(c => c.code.toLowerCase() === couponCode.toLowerCase());
    if (coupon) {
      applyCoupon(coupon);
    }
  };

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
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="font-fraunces text-2xl font-bold text-charcoal mb-4">
              Your Cart is Empty
            </h2>
            <Link to="/dashboard">
              <Button size="lg">Browse Menu</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg mb-4" 
                      />
                    )}
                    <h3 className="font-fraunces text-xl font-bold text-charcoal mb-2">
                      {item.name}
                    </h3>
                    <div className="text-sm text-charcoal/70 space-y-1">
                      {item.base && <p>Base: {item.base}</p>}
                      {item.sauce && <p>Sauce: {item.sauce}</p>}
                      {item.cheese && <p>Cheese: {item.cheese}</p>}
                      {item.vegetables && item.vegetables.length > 0 && (
                        <p>Veggies: {item.vegetables.join(', ')}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="font-ibmMono text-2xl font-bold text-char-orange">
                      ₹{item.price}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Coupon Section */}
            <Card className="p-6">
              <h3 className="font-fraunces text-xl font-bold text-charcoal mb-4">
                Apply Coupon
              </h3>
              <div className="flex gap-3 mb-4">
                <Input 
                  placeholder="Enter coupon code" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleApplyCoupon} disabled={!couponCode}>
                  Apply
                </Button>
              </div>
              
              {appliedCoupon && (
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-green-700">
                      {appliedCoupon.code}
                    </span>
                    <span className="text-green-600 text-sm">
                      {appliedCoupon.title}
                    </span>
                  </div>
                  <button 
                    onClick={removeCoupon} 
                    className="text-green-700 hover:text-green-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {/* Available Coupons */}
              <div>
                <h4 className="text-sm font-semibold text-charcoal/70 mb-2">
                  Available Coupons
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {availableCoupons.map((coupon) => (
                    <div 
                      key={coupon.id} 
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        appliedCoupon?.id === coupon.id 
                          ? 'border-char-orange bg-char-orange/5' 
                          : 'border-charcoal/10 hover:border-char-orange/50'
                      }`}
                      onClick={() => applyCoupon(coupon)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-charcoal">{coupon.code}</span>
                        <span className="text-sm text-char-orange font-bold">{coupon.discount}</span>
                      </div>
                      <p className="text-xs text-charcoal/70 mt-1">{coupon.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Total Section */}
            <Card className="p-6 bg-mozzarella/20 border-mozzarella">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal/70">
                    Subtotal
                  </span>
                  <span className="font-ibmMono font-semibold text-charcoal">
                    ₹{subtotal}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>
                      Discount
                    </span>
                    <span className="font-ibmMono font-semibold">
                      -₹{Math.round(discount)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-charcoal/10">
                  <span className="text-xl font-semibold text-charcoal">
                    Total
                  </span>
                  <span className="font-ibmMono text-3xl font-bold text-char-orange">
                    ₹{Math.round(total)}
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" onClick={clearCart} className="flex-1">
                  Clear Cart
                </Button>
                <Link to="/order-summary" className="flex-1">
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
