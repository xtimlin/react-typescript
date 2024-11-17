import React, { useContext } from 'react';
import { ProductProps } from '../../types/miniMarketTypes';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

const CartItemCard: React.FC<ProductProps> = ({ product }) => {
  const { updateCartItems } = useContext(
    MiniMarketContext,
  ) as MiniMarketContextType;

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white max-w-lg">
      {/* Product Image */}
      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={product.imageURL}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 px-4">
        <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
      </div>

      {/* Quantity Selector with Final Price */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateCartItems({ ...product, quantity: -1 })}
          className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
        >
          -
        </button>
        <span className="w-8 text-center text-sm">{product.quantity}</span>
        <button
          onClick={() => updateCartItems({ ...product, quantity: 1 })}
          className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
        >
          +
        </button>
        {/* Final Price */}
        <span className="text-sm font-medium text-gray-800">
          ${product.quantity * product.price}
        </span>
      </div>

      {/* Delete Icon */}
      <button
        className="ml-4 text-gray-500 hover:text-red-500"
        onClick={() => updateCartItems({ ...product, quantity: 0 })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItemCard;
