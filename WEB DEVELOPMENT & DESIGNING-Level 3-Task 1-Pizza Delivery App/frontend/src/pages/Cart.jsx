
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) return alert('Razorpay SDK failed to load');

    const orderRes = await axios.post('/api/payment/create-order', { amount: total });
    const options = {
      key: 'rzp_test_123',
      amount: orderRes.data.amount,
      currency: orderRes.data.currency,
      name: 'PizzaHub',
      order_id: orderRes.data.id,
      handler: async function (response) {
        await axios.post('/api/orders', { items: cart, total, paymentId: response.razorpay_payment_id });
        clearCart();
        navigate('/orders');
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      <h1 className="title">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '4rem' }}>
          <span style={{ fontSize: '5rem' }}>🛒</span>
          <h2 style={{ color: '#111827', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Your Cart is Empty!
          </h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>
            Start building your perfect pizza now!
          </p>
          <Link to="/custom" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Build Your Pizza
          </Link>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {cart.map((item, index) => (
              <div key={item.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ color: '#111827', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                      🍕 Pizza {index + 1}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#6b7280' }}>
                      <p>
                        <strong>Base:</strong> {item.base}
                      </p>
                      <p>
                        <strong>Sauce:</strong> {item.sauce}
                      </p>
                      <p>
                        <strong>Cheese:</strong> {item.cheese}
                      </p>
                      {item.vegetables.length > 0 && (
                        <p>
                          <strong>Veggies:</strong> {item.vegetables.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
                    <span
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: '800',
                        color: '#dc2626'
                      }}
                    >
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: '#fee2e2',
                        color: '#dc2626',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: '600'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="card" style={{ marginTop: '2rem', backgroundColor: '#fef2f2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ color: '#111827', margin: 0 }}>Total Amount</h2>
              <span
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#dc2626'
                }}
              >
                ₹{total}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={clearCart}
                className="btn btn-secondary"
                style={{ flex: 1, fontSize: '1.1rem' }}
              >
                Clear Cart
              </button>
              <button
                onClick={handlePayment}
                className="btn btn-primary"
                style={{ flex: 1, fontSize: '1.1rem' }}
              >
                Proceed to Payment 💳
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
