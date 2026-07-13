
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { Flame, ArrowLeft } from 'lucide-react';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8">
          <Link to="/" className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 mb-8">
              <Flame className="w-8 h-8 text-char-orange" />
              <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
            </Link>
            <div className="text-6xl mb-4">✅</div>
            <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
              Password Reset Successful
            </h1>
            <p className="text-charcoal/70 mb-8">
              Your password has been updated successfully.
            </p>
            <Link to="/login">
              <Button size="lg">Sign In Now</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

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
              Reset Password
            </h1>
            <p className="text-charcoal/70">Enter your new password</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="New Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <Input
            label="Confirm New Password"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <Button type="submit" className="w-full" size="lg">
            Reset Password
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ResetPassword;
