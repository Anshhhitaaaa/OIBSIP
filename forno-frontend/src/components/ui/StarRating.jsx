
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export default function StarRating({ rating, size = 16 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-yellow-400">
          {i < fullStars ? (
            <Star size={size} fill="currentColor" />
          ) : i === fullStars && hasHalfStar ? (
            <StarHalf size={size} fill="currentColor" />
          ) : (
            <Star size={size} />
          )}
        </span>
      ))}
      <span className="text-charcoal/70 text-sm ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

