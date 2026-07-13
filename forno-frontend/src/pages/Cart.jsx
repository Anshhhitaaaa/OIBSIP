
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useOrder } from '../context/OrderContext';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useOrder();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

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

            <Card className="p-6 bg-mozzarella/20 border-mozzarella">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-charcoal">
                  Total
                </span>
                <span className="font-ibmMono text-3xl font-bold text-char-orange">
                  ₹{total}
                </span>
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
