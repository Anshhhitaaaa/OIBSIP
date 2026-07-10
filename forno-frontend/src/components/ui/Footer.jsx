
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-fraunces text-2xl font-bold text-char-orange mb-4">forno</h3>
            <p className="text-white/70 mb-4">
              Wood-fired pizza, perfectly crafted with love and 900°F flames.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-white/70 hover:text-char-orange transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-char-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-char-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/70">
              <li>123 Pizza Street, Food City</li>
              <li>+91 93152 98434</li>
              <li>agrawal.anshita07@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/50">
          <p>© 2024 forno. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

