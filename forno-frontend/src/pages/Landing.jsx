
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/ui/Footer';
import { mockPizzas, mockOffers } from '../data/mockData';
import { Flame, Utensils, Truck, Star, Tag } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <PublicNavbar />
      
      {/* Hero Section with Pizza Background Vibe */}
      <section className="py-24 px-6 bg-gradient-to-br from-warm-cream to-mozzarella/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-char-orange/10 text-char-orange px-4 py-2 rounded-full mb-6">
                <Flame className="w-5 h-5" />
                <span className="font-semibold">Wood-Fired Since 2024</span>
              </div>
              <h1 className="font-fraunces text-5xl md:text-7xl font-bold text-charcoal mb-6">
                Wood-Fired Pizza,<br />
                <span className="text-char-orange">Perfectly Crafted</span>
              </h1>
              <p className="text-xl text-charcoal/70 mb-10">
                Hand-stretched dough, San Marzano tomatoes, fresh mozzarella, and 900°F flames. 
                Pizza the way it was meant to be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/login">
                  <Button size="xl">Order Now</Button>
                </Link>
                <Link to="/menu">
                  <Button variant="ghost" size="xl">View Menu</Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12">
                <div className="flex items-center gap-2 text-charcoal/70">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/70">
                  <Utensils className="w-5 h-5" />
                  <span>Fresh Daily</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/70">
                  <Truck className="w-5 h-5" />
                  <span>30 Min Delivery</span>
                </div>
              </div>
            </div>

            {/* Hero Pizza Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" 
                  alt="Pizza 1" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400" 
                  alt="Pizza 2" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=400" 
                  alt="Pizza 3" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400" 
                  alt="Pizza 4" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-charcoal mb-4 flex items-center justify-center gap-3">
              <Tag className="w-10 h-10 text-char-orange" />
              Amazing Offers
            </h2>
            <p className="text-xl text-charcoal/70">Don't miss out on these limited-time deals!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${offer.color} p-6 text-white`}>
                  <div className="text-6xl mb-4">{offer.icon}</div>
                  <div className="font-fraunces text-4xl font-bold mb-2">{offer.discount}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-2">{offer.title}</h3>
                  <p className="text-charcoal/70 mb-4">{offer.description}</p>
                  <div className="bg-mozzarella px-4 py-2 rounded-full inline-block">
                    <span className="font-bold text-char-orange">Code: {offer.code}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Signature Pizzas
            </h2>
            <p className="text-xl text-charcoal/70">Our most loved pizzas, crafted with perfection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockPizzas.slice(0,4).map((pizza) => (
              <Card key={pizza.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pizza.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-mozzarella text-charcoal">
                        {tag}
                      </span>
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
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="xl">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-charcoal/70">Get your perfect pizza in 4 easy steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Choose Base', desc: 'Neapolitan, Roman, or Whole Wheat', icon: '🍕' },
              { num: '02', title: 'Pick Sauce', desc: 'Tomato, pesto, or white truffle', icon: '🍅' },
              { num: '03', title: 'Add Cheese', desc: 'Mozzarella, gorgonzola, burrata', icon: '🧀' },
              { num: '04', title: 'Toppings', desc: 'Fresh veggies, herbs, and more', icon: '🌿' }
            ].map((step, i) => (
              <div key={i} className="text-center p-8 bg-warm-cream/50 rounded-2xl">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-4xl font-fraunces font-bold text-char-orange mb-2">
                  {step.num}
                </div>
                <h3 className="font-fraunces text-xl font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/login">
              <Button size="xl">Start Building</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
