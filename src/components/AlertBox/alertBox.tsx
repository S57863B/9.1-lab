import React from 'react';
import type { AlertBoxProps } from '../../types/index.ts';

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  return (
    <div className={`p-4 border-l-4 rounded-r shadow-sm ${alertStyles[type]}`}>
      <div className="flex justify-between items-start">
        <p className="font-semibold">{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-current opacity-70 hover:opacity-100 text-xl leading-none font-bold focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
      {children && <div className="mt-2 text-sm opacity-90">{children}</div>}
    </div>
  );
};