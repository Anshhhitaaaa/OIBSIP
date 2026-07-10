
import React from 'react';

const Card = ({ children, className = '', ...props }) => (
  <div
    className={`
      bg-white rounded-xl border border-charcoal/10 shadow-sm
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

export default Card;
