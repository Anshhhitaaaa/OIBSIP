
import React from 'react';

const Input = ({ className = '', label, id, ...props }) => (
  <div className="flex flex-col gap-1.5">
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-charcoal/80">
        {label}
      </label>
    )}
    <input
      id={id}
      className={`
        w-full px-4 py-2.5 border border-charcoal/20 rounded-lg bg-white 
        focus:outline-none focus:ring-2 focus:ring-char-orange/30 focus:border-char-orange/50
        transition-all duration-200
        ${className}
      `}
      {...props}
    />
  </div>
);

export default Input;
