import React from 'react';
import type { ProductDisplayProps } from '../../types/index.tsx';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
      {product.imageUrl && (
        <div className="h-48 w-full bg-gray-100">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
        </div>

        {showDescription && (
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        )}

        {showStockStatus && (
          <div className="mb-4">
            <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        )}

        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            disabled={!product.inStock}
            className={`w-full font-medium py-2 px-4 rounded transition duration-150 mb-4 ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        )}

        {children && <div className="mt-2 pt-4 border-t border-gray-100">{children}</div>}
      </div>
    </div>
  );
};