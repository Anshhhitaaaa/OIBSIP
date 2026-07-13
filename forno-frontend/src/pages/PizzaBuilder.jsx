
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/ui/Footer';
import { mockBases, mockSauces, mockCheeses, mockVeggies } from '../data/mockData';
import { useOrder } from '../context/OrderContext';

const PizzaBuilder = () => {
  const [step, setStep] = useState(1);
  const [base, setBase] = useState(mockBases[0]);
  const [sauce, setSauce] = useState(mockSauces[0]);
  const [cheese, setCheese] = useState(mockCheeses[0]);
  const [veggies, setVeggies] = useState([]);
  const { addToCart } = useOrder();
  const navigate = useNavigate();

  const total = base.price + sauce.price + cheese.price + 
    veggies.reduce((sum, v) => sum + v.price, 0) + 399; // Base pizza price

  const toggleVeggie = (veg) => {
    setVeggies((prev) =>
      prev.some(v => v.id === veg.id)
        ? prev.filter(v => v.id !== veg.id)
        : [...prev, veg]
    );
  };

  const renderPizzaPreview = () => {
    // Map selections to colors for SVG
    const baseColor = {
      'Neapolitan': '#F4D6A5',
      'Roman': '#E8C98E',
      'Whole Wheat': '#D4B483',
      'Gluten-Free': '#F0E4CF',
      'Stuffed Crust': '#F5DDB2'
    }[base.name] || '#F4D6A5';

    const sauceColor = {
      'San Marzano Tomato': '#D64045',
      'Creamy Garlic': '#F5E6D3',
      'Pesto Genovese': '#6B9080',
      'Spicy Arrabbiata': '#C44536',
      'White Truffle Cream': '#FFF4E6'
    }[sauce.name] || '#D64045';

    const cheeseColor = {
      'Fresh Mozzarella': '#FFF8E1',
      'Smoked Provolone': '#FFE082',
      'Gorgonzola Dolce': '#F5F0E1',
      'Burrata': '#FFFFFF'
    }[cheese.name] || '#FFF8E1';

    return (
      <div className="relative w-full aspect-square max-w-md mx-auto">
        <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-xl">
          {/* Base / Crust */}
          <circle cx="150" cy="150" r="140" fill={baseColor} />
          <circle cx="150" cy="150" r="125" fill="#F8ECD3" />
          
          {/* Sauce */}
          <circle cx="150" cy="150" r="115" fill={sauceColor} />
          
          {/* Cheese */}
          <circle cx="150" cy="150" r="110" fill={cheeseColor} opacity="0.9" />
          
          {/* Veggies as random circles */}
          {veggies.map((veg, i) => {
            const colors = {
              'Roasted Bell Peppers': '#FF6B6B',
              'Sautéed Mushrooms': '#8B7355',
              'Caramelized Onions': '#D4A574',
              'Kalamata Olives': '#2D2A24',
              'Fresh Basil': '#4C6444',
              'Roasted Artichokes': '#A8C69F',
              'Sun-Dried Tomatoes': '#C44536',
              'Arugula': '#6A994E'
            };
            const color = colors[veg.name] || '#666';
            // Random positions for veggies
            const positions = [
              {x: 80, y: 80}, {x: 220, y: 90}, {x: 150, y: 70},
              {x: 90, y: 180}, {x: 210, y: 200}, {x: 140, y: 220},
              {x: 70, y: 140}, {x: 230, y: 150}
            ];
            const pos = positions[i % positions.length];
            return (
              <circle
                key={veg.id}
                cx={pos.x}
                cy={pos.y}
                r={10}
                fill={color}
              />
            );
          })}
          
          {/* Charred spots on crust */}
          {[
            {x: 70, y: 70}, {x: 230, y: 60}, {x: 240, y: 230},
            {x: 60, y: 220}, {x: 150, y: 30}, {x: 150, y: 270}
          ].map((spot, i) => (
            <circle
              key={`char-${i}`}
              cx={spot.x}
              cy={spot.y}
              r={6}
              fill="#5C4033"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <UserNavbar />
      <div className="flex-1 max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-6 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Pizza Preview */}
          <div className="sticky top-24">
            <h2 className="font-fraunces text-4xl font-bold text-charcoal mb-8">
              Your Custom Pizza
            </h2>
            {renderPizzaPreview()}
            <div className="mt-8 p-6 bg-white rounded-xl border border-charcoal/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-charcoal/70">Total Price</span>
                <span className="font-ibmMono text-3xl font-bold text-char-orange">
                  ₹{total}
                </span>
              </div>
            </div>
          </div>

          {/* Right side: Steps */}
          <div>
            {/* Step indicator */}
            <div className="flex gap-2 mb-10">
              {[1, 2, 3, 4].map((s) => (
                <button
                  key={s}
                  onClick={() => setStep(s)}
                  className={`
                    flex-1 py-3 rounded-lg font-semibold text-center
                    transition-all duration-200
                    ${s === step 
                      ? 'bg-char-orange text-white' 
                      : 'bg-white text-charcoal border border-charcoal/10 hover:border-char-orange/50'
                    }
                  `}
                >
                  Step {s}
                </button>
              ))}
            </div>

            <Card className="p-8">
              {step === 1 && (
                <div>
                  <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-6">
                    Choose Your Base
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {mockBases.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setBase(b)}
                        className={`
                          p-5 rounded-xl border-2 text-left
                          transition-all duration-200
                          ${base.id === b.id 
                            ? 'border-char-orange bg-char-orange/5' 
                            : 'border-charcoal/10 hover:border-charcoal/30'
                          }
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-charcoal text-lg">{b.name}</h4>
                            <p className="text-charcoal/60 text-sm">{b.description}</p>
                          </div>
                          <span className="font-ibmMono font-semibold text-char-orange">
                            {b.price > 0 ? `+₹${b.price}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-6">
                    Pick a Sauce
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {mockSauces.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSauce(s)}
                        className={`
                          p-5 rounded-xl border-2 text-left
                          transition-all duration-200
                          ${sauce.id === s.id 
                            ? 'border-char-orange bg-char-orange/5' 
                            : 'border-charcoal/10 hover:border-charcoal/30'
                          }
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-charcoal text-lg">{s.name}</h4>
                          <span className="font-ibmMono font-semibold text-char-orange">
                            {s.price > 0 ? `+₹${s.price}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-6">
                    Choose Cheese
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {mockCheeses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCheese(c)}
                        className={`
                          p-5 rounded-xl border-2 text-left
                          transition-all duration-200
                          ${cheese.id === c.id 
                            ? 'border-char-orange bg-char-orange/5' 
                            : 'border-charcoal/10 hover:border-charcoal/30'
                          }
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-charcoal text-lg">{c.name}</h4>
                          <span className="font-ibmMono font-semibold text-char-orange">
                            {c.price > 0 ? `+₹${c.price}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-6">
                    Add Veggies
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {mockVeggies.map((v) => {
                      const isSelected = veggies.some(veg => veg.id === v.id);
                      return (
                        <button
                          key={v.id}
                          onClick={() => toggleVeggie(v)}
                          className={`
                            p-4 rounded-xl border-2 text-left
                            transition-all duration-200
                            ${isSelected 
                              ? 'border-char-orange bg-char-orange/5' 
                              : 'border-charcoal/10 hover:border-charcoal/30'
                            }
                          `}
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-charcoal">{v.name}</h4>
                            <span className="font-ibmMono font-semibold text-char-orange">
                              +₹{v.price}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button variant="ghost" onClick={() => setStep(s => s - 1)}>
                  ← Back
                </Button>
              )}
              <div className="flex gap-3 ml-auto">
                {step < 4 ? (
                <Button onClick={() => setStep(s => s + 1)}>
                  Next →
                </Button>
              ) : (
                <Button size="lg" onClick={() => {
                  const pizza = { base: base.name, sauce: sauce.name, cheese: cheese.name, vegetables: veggies.map(v => v.name), price: total, id: 'p' + Date.now(), name: 'Custom Pizza' };
                  addToCart({
                    ...pizza,
                    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600'
                  });
                  navigate('/cart');
                }}>
                  Add to Cart
                </Button>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PizzaBuilder;
