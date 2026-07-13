
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: '🥖',
      title: '5 Pizza Bases',
      description: 'Choose from thin crust, thick, whole wheat, cheesy, and gluten-free!'
    },
    {
      icon: '🍝',
      title: '5 Delicious Sauces',
      description: 'Tomato, BBQ, Pesto, Alfredo, or spicy peri-peri sauce!'
    },
    {
      icon: '🧀',
      title: '3 Premium Cheeses',
      description: 'Mozzarella, cheddar, or parmesan cheese for the perfect melt!'
    },
    {
      icon: '🥬',
      title: 'Fresh Vegetables',
      description: 'Customize with onions, tomatoes, capsicum, olives, mushrooms, corn, and more!'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Hot and fresh pizzas delivered right to your doorstep!'
    },
    {
      icon: '💳',
      title: 'Secure Payment',
      description: 'Safe and easy payments with Razorpay integration!'
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ fontSize: '5rem' }}>🍕</span>
        <h1 className="title" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
          Welcome to PizzaHub!
        </h1>
        <p className="subtitle" style={{ fontSize: '1.375rem', marginBottom: '2.5rem' }}>
          Order delicious, customizable pizzas delivered hot to your door!
        </p>
        <Link to="/custom" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1.125rem 2.5rem' }}>
          Build Your Pizza Now
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid grid-3" style={{ marginTop: '4rem' }}>
        {features.map((feature, index) => (
          <div key={index} className="card">
            <span style={{ fontSize: '3rem' }}>{feature.icon}</span>
            <h3 style={{ color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
              {feature.title}
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
