import React, { useContext } from 'react';
import {
  ProductProps,
  MiniMarketContextType,
} from '../../types/miniMarketTypes';
import MiniMarketContext from '../../context/miniMarketContext';

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { counterUpdateCartItemQuantity } = useContext(
    MiniMarketContext,
  ) as MiniMarketContextType;

  return (
    <div>
      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow-lg max-w-xs mx-auto">
        <div
          className="w-full h-48 bg-cover bg-center rounded-lg overflow-hidden mb-4 hover:opacity-75"
          style={{ backgroundImage: `url(${product.imageURL})` }}
        ></div>

        {/* Card Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        {/* Price Range */}
        <p className="text-gray-600 mb-4">${product.price}</p>

        {/* Buy Now Button */}
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={() =>
            counterUpdateCartItemQuantity({ ...product, quantity: 1 })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
