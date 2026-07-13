
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useAdminAuth } from '../context/AdminAuthContext';
import { Flame, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 bg-white">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flame className="w-8 h-8 text-char-orange" />
              <span className="font-fraunces text-2xl font-bold text-charcoal">
                forno
              </span>
            </div>
            <span className="text-xs font-semibold text-deep-tomato uppercase tracking-widest">
              Admin Portal
            </span>
            <h1 className="font-fraunces text-3xl font-bold text-charcoal mt-6 mb-2">
              Admin Sign In
            </h1>
            <p className="text-charcoal/70">Access the admin dashboard</p>
          </div>
        </div>

        {error && (
          <div className="bg-deep-tomato/10 text-deep-tomato p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Admin Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@forno.com"
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
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
