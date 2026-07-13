
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { Flame } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = await login(email, password);
      if (userData.isAdmin) {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Flame className="w-8 h-8 text-char-orange" />
            <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
          </Link>
          <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
            Welcome Back
          </h1>
          <p className="text-charcoal/70">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-deep-tomato/10 text-deep-tomato p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-char-orange hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-charcoal/70">
            Don't have an account?{' '}
            <Link to="/register" className="text-char-orange hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
