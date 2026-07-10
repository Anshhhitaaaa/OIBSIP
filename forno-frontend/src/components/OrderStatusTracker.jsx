
import React from 'react';

const orderStatuses = ['Order Received', 'In Kitchen', 'Sent to Delivery'];

const OrderStatusTracker = ({ status }) => {
  const currentIndex = orderStatuses.indexOf(status);
  
  return (
    <div className="p-6 bg-white rounded-xl border border-charcoal/10">
      <div className="flex items-center justify-between">
        {orderStatuses.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center border-2
                  ${i <= currentIndex 
                    ? 'bg-char-orange border-char-orange text-white' 
                    : 'bg-white border-charcoal/20 text-charcoal/50'
                  }
                `}
              >
                {i === 0 ? '📥' : i === 1 ? '🔥' : '🛵'}
              </div>
              <span className={`
                text-sm font-medium text-center
                ${i <= currentIndex ? 'text-charcoal' : 'text-charcoal/50'}
              `}>
                {s}
              </span>
            </div>
            {i < orderStatuses.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-charcoal/10">
                <div
                  className={`h-full bg-char-orange transition-all duration-700 ${
                    i < currentIndex ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusTracker;
