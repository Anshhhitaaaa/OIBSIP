
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const baseOptions = ['Thin Crust', 'Thick Crust', 'Whole Wheat', 'Cheesy Crust', 'Gluten Free'];
const sauceOptions = ['Tomato Sauce', 'BBQ', 'Pesto', 'Alfredo', 'Peri-Peri'];
const cheeseOptions = ['Mozzarella', 'Cheddar', 'Parmesan'];
const vegOptions = ['Onion', 'Tomato', 'Capsicum', 'Olives', 'Mushroom', 'Corn'];

export default function CustomPizza() {
  const [step, setStep] = useState(1);
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedCheese, setSelectedCheese] = useState('');
  const [selectedVeg, setSelectedVeg] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const basePrice = 100;
  const price = basePrice + (selectedVeg.length * 20);

  const handleAdd = () => {
    addToCart({ base: selectedBase, sauce: selectedSauce, cheese: selectedCheese, vegetables: selectedVeg, price });
    navigate('/cart');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 style={{ marginBottom: '1.5rem', color: '#111827' }}>Choose Your Pizza Base</h2>
            <div className="grid grid-3">
              {baseOptions.map((base) => (
                <button
                  key={base}
                  onClick={() => setSelectedBase(base)}
                  className="card"
                  style={{
                    textAlign: 'center',
                    border: selectedBase === base ? '3px solid #dc2626' : '3px solid transparent',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  {base}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 style={{ marginBottom: '1.5rem', color: '#111827' }}>Pick a Sauce</h2>
            <div className="grid grid-3">
              {sauceOptions.map((sauce) => (
                <button
                  key={sauce}
                  onClick={() => setSelectedSauce(sauce)}
                  className="card"
                  style={{
                    textAlign: 'center',
                    border: selectedSauce === sauce ? '3px solid #dc2626' : '3px solid transparent',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  {sauce}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 style={{ marginBottom: '1.5rem', color: '#111827' }}>Select Your Cheese</h2>
            <div className="grid grid-3">
              {cheeseOptions.map((cheese) => (
                <button
                  key={cheese}
                  onClick={() => setSelectedCheese(cheese)}
                  className="card"
                  style={{
                    textAlign: 'center',
                    border: selectedCheese === cheese ? '3px solid #dc2626' : '3px solid transparent',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  {cheese}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 style={{ marginBottom: '1.5rem', color: '#111827' }}>
              Add Vegetables (₹20 each)
            </h2>
            <div className="grid grid-3">
              {vegOptions.map((veg) => (
                <label
                  key={veg}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    border: selectedVeg.includes(veg) ? '3px solid #dc2626' : '3px solid transparent',
                    margin: 0
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedVeg.includes(veg)}
                    onChange={(e) =>
                      setSelectedVeg(
                        e.target.checked
                          ? [...selectedVeg, veg]
                          : selectedVeg.filter((v) => v !== veg)
                      )
                    }
                    style={{
                      width: '24px',
                      height: '24px',
                      accentColor: '#dc2626',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{veg}</span>
                </label>
              ))}
            </div>

            <div className="card" style={{ marginTop: '2rem', textAlign: 'center', backgroundColor: '#fef2f2' }}>
              <h3 style={{ color: '#111827', marginBottom: '0.5rem' }}>Order Summary</h3>
              <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Base: {selectedBase}</p>
              <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Sauce: {selectedSauce}</p>
              <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Cheese: {selectedCheese}</p>
              {selectedVeg.length > 0 && (
                <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Veggies: {selectedVeg.join(', ')}</p>
              )}
              <p style={{ fontSize: '2rem', fontWeight: '800', color: '#dc2626', marginTop: '1rem' }}>
                Total: ₹{price}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !selectedBase;
      case 2:
        return !selectedSauce;
      case 3:
        return !selectedCheese;
      default:
        return false;
    }
  };

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      <h1 className="title" style={{ textAlign: 'center' }}>Build Your Perfect Pizza!</h1>

      {/* Progress Steps */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
        {[1, 2, 3, 4].map((s) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1.5rem',
                backgroundColor: s <= step ? '#dc2626' : '#e5e7eb',
                color: s <= step ? 'white' : '#4b5563',
                boxShadow: s <= step ? '0 4px 12px rgba(220,38,38,0.3)' : 'none'
              }}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                style={{
                  width: '80px',
                  height: '4px',
                  backgroundColor: s < step ? '#dc2626' : '#e5e7eb',
                  marginLeft: '1rem',
                  marginRight: '1rem'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="card">{renderStepContent()}</div>

      {/* Navigation Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: step === 1 ? 'flex-end' : 'space-between',
          marginTop: '2rem',
          gap: '1rem'
        }}
      >
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="btn btn-secondary"
            style={{ fontSize: '1.1rem' }}
          >
            ← Back
          </button>
        )}

        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={isNextDisabled()}
            className="btn btn-primary"
            style={{
              fontSize: '1.1rem',
              opacity: isNextDisabled() ? 0.5 : 1,
              cursor: isNextDisabled() ? 'not-allowed' : 'pointer'
            }}
          >
            Next →
          </button>
        ) : (
          <button onClick={handleAdd} className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Add to Cart 🛒
          </button>
        )}
      </div>
    </div>
  );
}
