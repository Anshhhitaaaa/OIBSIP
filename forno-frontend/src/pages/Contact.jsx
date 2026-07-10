
import React, { useState } from 'react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/ui/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col">
      <PublicNavbar />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-warm-cream to-mozzarella/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-fraunces text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-charcoal/70">
              We'd love to hear from you!
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-fraunces text-3xl font-bold text-charcoal mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-char-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-char-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal mb-1">Address</h3>
                      <p className="text-charcoal/70">123 Pizza Street, Food City</p>
                    </div>
                  </Card>

                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-char-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-char-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal mb-1">Phone</h3>
                      <p className="text-charcoal/70">+91 93152 98434</p>
                    </div>
                  </Card>

                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-char-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-char-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal mb-1">Email</h3>
                      <p className="text-charcoal/70">agrawal.anshita07@gmail.com</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-fraunces text-2xl font-bold text-charcoal mb-4">
                        Message Sent!
                      </h3>
                      <p className="text-charcoal/70">
                        Thank you for reaching out. We'll get back to you soon!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        label="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                      />
                      <Input
                        label="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        required
                      />
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Your Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-char-orange/50 resize-vertical min-h-32"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
