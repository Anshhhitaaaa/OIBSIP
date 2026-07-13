
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { Flame, ArrowLeft } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <Flame className="w-8 h-8 text-char-orange" />
              <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
            </Link>
          <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
            Create Account
          </h1>
          <p className="text-charcoal/70">Join Forno and start ordering</p>
        </div>

        {error && (
          <div className="bg-deep-tomato/10 text-deep-tomato p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <Button type="submit" className="w-full" size="lg">
            Sign Up
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-charcoal/70">
            Already have an account?{' '}
            <Link to="/login" className="text-char-orange hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Register;
