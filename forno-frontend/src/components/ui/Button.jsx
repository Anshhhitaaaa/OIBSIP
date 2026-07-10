
import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-char-orange text-white hover:bg-char-orange/90 focus:ring-char-orange/50',
    secondary: 'bg-mozzarella text-charcoal hover:bg-mozzarella/90 focus:ring-mozzarella/50',
    success: 'bg-basil-green text-white hover:bg-basil-green/90 focus:ring-basil-green/50',
    danger: 'bg-deep-tomato text-white hover:bg-deep-tomato/90 focus:ring-deep-tomato/50',
    ghost: 'text-charcoal hover:bg-charcoal/10 focus:ring-charcoal/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
