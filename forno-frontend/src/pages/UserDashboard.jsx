
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import OrderStatusTracker from '../components/OrderStatusTracker';
import { mockPizzas, mockOffers } from '../data/mockData';
import { Plus, Flame, Tag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';

const UserDashboard = () => {
  const { user } = useAuth();
  const { activeOrder, addToCart, orders } = useOrder();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const handleAddPizzaToCart = (pizza) => {
    const pizzaItem = {
      id: pizza.id,
      name: pizza.name,
      base: pizza.base,
      sauce: pizza.sauce,
      cheese: pizza.cheese,
      veggies: pizza.veggies,
      total: pizza.price,
      image: pizza.image,
      description: pizza.description
    };
    addToCart(pizzaItem);
  };

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <UserNavbar />
      <div className="flex-1 max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="font-fraunces text-4xl font-bold text-charcoal mb-2">
            {getGreeting()}, {user?.name || 'Guest'}!
          </h1>
          <p className="text-charcoal/70">Ready for some delicious wood-fired pizza?</p>
        </div>

        {/* Offers Section */}
        <div className="mb-12">
          <h2 className="font-fraunces text-3xl font-bold text-charcoal mb-6 flex items-center gap-2">
            <Tag className="w-8 h-8 text-char-orange" />
            Special Offers for You!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className={`bg-gradient-to-br ${offer.color} p-4 text-white`}>
                  <div className="text-4xl mb-2">{offer.icon}</div>
                  <div className="font-fraunces text-3xl font-bold">{offer.discount}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-fraunces text-xl font-bold text-charcoal mb-1">{offer.title}</h3>
                  <p className="text-charcoal/70 text-sm mb-3">{offer.description}</p>
                  <div className="bg-mozzarella px-3 py-1 rounded-full inline-block">
                    <span className="font-bold text-char-orange text-sm">Code: {offer.code}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Order Tracker */}
        {activeOrder && activeOrder.status !== 'Delivered' && (
          <div className="mb-12">
            <h2 className="font-fraunces text-2xl font-bold text-charcoal mb-4">
              Your Order is on the Way!
            </h2>
            <OrderStatusTracker status={activeOrder.status} />
            <div className="mt-4 text-center">
              <Link to={`/orders/${activeOrder.id}`} className="text-char-orange hover:underline font-semibold">
                View Order Details →
              </Link>
            </div>
          </div>
        )}

        {/* Build Your Own CTA */}
        <div className="mb-12">
          <Link to="/builder">
            <Card className="p-8 bg-gradient-to-r from-char-orange to-basil-green text-white cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-fraunces text-3xl font-bold mb-2">
                    Build Your Own Pizza
                  </h2>
                  <p className="opacity-90">
                    Choose your base, sauce, cheese, and toppings
                  </p>
                </div>
                <div className="text-6xl">
                  <Flame />
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Menu */}
        <div className="mb-12">
          <h2 className="font-fraunces text-3xl font-bold text-charcoal mb-8">
            Signature Pizzas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockPizzas.map((pizza) => (
              <Card key={pizza.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
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
                    <span className="font-ibmMono font-bold text-xl text-char-orange">
                      ₹{pizza.price}
                    </span>
                    <Button size="sm" onClick={() => handleAddPizzaToCart(pizza)}>
                      <Plus className="w-4 h-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
