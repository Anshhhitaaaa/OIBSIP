
import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-mozzarella text-charcoal',
    success: 'bg-basil-green/10 text-basil-green',
    warning: 'bg-char-orange/10 text-char-orange',
    danger: 'bg-deep-tomato/10 text-deep-tomato',
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
