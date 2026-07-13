
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import PublicNavbar from '../components/PublicNavbar';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import Badge from '../components/ui/Badge';
import { mockPizzas } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';

const Menu = () => {
  const { user } = useAuth();
  const { addToCart } = useOrder();

  const handleAddToCart = (pizza) => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      base: pizza.base.name,
      sauce: pizza.sauce.name,
      cheese: pizza.cheese.name,
      vegetables: pizza.veggies.map(v => v.name),
      price: pizza.price,
      image: pizza.image,
      description: pizza.description
    });
  };

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      {user ? <UserNavbar /> : <PublicNavbar />}
      <div className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-fraunces text-5xl font-bold text-charcoal mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-charcoal/70">
            Delicious wood-fired pizzas made with love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockPizzas.map((pizza) => (
            <Card key={pizza.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src={pizza.image} 
                alt={pizza.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {pizza.tags.map((tag, i) => (
                    <Badge key={i} variant={tag === 'Vegetarian' ? 'success' : 'default'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-2">
                  {pizza.name}
                </h3>
                <p className="text-charcoal/70 text-sm mb-6">
                  {pizza.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-ibmMono font-bold text-2xl text-char-orange">
                    ₹{pizza.price}
                  </span>
                  {user ? (
                    <button 
                      onClick={() => handleAddToCart(pizza)}
                      className="px-4 py-2 bg-char-orange text-white rounded-lg font-medium hover:bg-char-orange/90 transition-colors"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="px-4 py-2 bg-char-orange text-white rounded-lg font-medium hover:bg-char-orange/90 transition-colors">
                        Order Now
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
