
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { Flame } from 'lucide-react';

const PublicNavbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <Flame className="w-10 h-10 text-char-orange" />
            <img 
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=80" 
              alt="Pizza Logo" 
              className="w-10 h-10 rounded-full object-cover ml-2" 
            />
          </div>
          <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/menu" className="text-charcoal/70 hover:text-charcoal font-medium transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-charcoal/70 hover:text-charcoal font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-charcoal/70 hover:text-charcoal font-medium transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="md">Login</Button>
          </Link>
          <Link to="/register">
            <Button size="md">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;

