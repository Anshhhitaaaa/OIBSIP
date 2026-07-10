
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Flame } from 'lucide-react';

const VerifyEmail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    // Mock verification
    const timer = setTimeout(() => {
      setStatus(token === 'success' ? 'success' : 'error');
    }, 1500);
    return () => clearTimeout(timer);
  }, [token]);

  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 text-center">
        <Link to="/" className="inline-flex items-center justify-center gap-2 mb-8">
          <Flame className="w-8 h-8 text-char-orange" />
          <span className="font-fraunces text-2xl font-bold text-charcoal">forno</span>
        </Link>
        
        {status === 'loading' && (
          <div>
            <div className="w-12 h-12 border-4 border-char-orange border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h1 className="font-fraunces text-2xl font-bold text-charcoal mb-2">
              Verifying Email...
            </h1>
          </div>
        )}
        
        {status === 'success' && (
          <div>
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
              Email Verified!
            </h1>
            <p className="text-charcoal/70 mb-8">
              Your email has been successfully verified.
            </p>
            <Link to="/login">
              <Button size="lg">Sign In Now</Button>
            </Link>
          </div>
        )}
        
        {status === 'error' && (
          <div>
            <div className="text-6xl mb-4">❌</div>
            <h1 className="font-fraunces text-3xl font-bold text-charcoal mb-2">
              Verification Failed
            </h1>
            <p className="text-charcoal/70 mb-8">
              The verification link is invalid or has expired.
            </p>
            <Link to="/register">
              <Button size="lg">Try Again</Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
};

export default VerifyEmail;
