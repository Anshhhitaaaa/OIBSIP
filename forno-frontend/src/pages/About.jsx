
import React from 'react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/ui/Footer';
import Card from '../components/ui/Card';
import { Flame, Utensils, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <PublicNavbar />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-warm-cream to-mozzarella/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-fraunces text-5xl md:text-6xl font-bold text-charcoal mb-6">
              About Forno
            </h1>
            <p className="text-xl text-charcoal/70">
              Wood-fired pizza, perfectly crafted since 2024
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-fraunces text-4xl font-bold text-charcoal mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-charcoal/80 mb-4">
                  Forno was born from a passion for authentic, wood-fired pizza. We believe that great pizza starts with great ingredients.
                </p>
                <p className="text-lg text-charcoal/80 mb-4">
                  Our journey began in a small kitchen with a single wood-fired oven, and has grown into a beloved destination for pizza lovers.
                </p>
                <p className="text-lg text-charcoal/80">
                  Every pizza we make is a testament to our commitment to quality, tradition, and the joy of sharing great food.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=400" 
                  alt="Pizza Oven" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" 
                  alt="Making Pizza" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-fraunces text-4xl font-bold text-charcoal mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-char-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="w-8 h-8 text-char-orange" />
                </div>
                <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-4">
                  Authenticity
                </h3>
                <p className="text-charcoal/70">
                  We stay true to traditional pizza-making techniques, using wood-fired ovens and fresh ingredients.
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-char-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-8 h-8 text-char-orange" />
                </div>
                <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-4">
                  Quality
                </h3>
                <p className="text-charcoal/70">
                  We source only the finest, freshest ingredients to ensure every bite is perfect.
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-char-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-char-orange" />
                </div>
                <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-4">
                  Community
                </h3>
                <p className="text-charcoal/70">
                  We love our customers and are proud to be a part of our local community.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
