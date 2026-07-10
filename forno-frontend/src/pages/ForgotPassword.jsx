
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { Flame } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-8">
            <Flame className="w-8 h-8 text-char-orange" />
            <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
          </Link>
          <div className="text-6xl mb-4">📧</div>
          <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
            Reset Link Sent
          </h1>
          <p className="text-charcoal/70 mb-8">
            A password reset link has been sent to {email}.
          </p>
          <Link to="/login">
            <Button>Back to Login</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Flame className="w-8 h-8 text-char-orange" />
            <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
          </Link>
          <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
            Forgot Password
          </h1>
          <p className="text-charcoal/70">Enter your email to reset your password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Button type="submit" className="w-full" size="lg">
            Send Reset Link
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-charcoal/70">
            Remember your password?{' '}
            <Link to="/login" className="text-char-orange hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
