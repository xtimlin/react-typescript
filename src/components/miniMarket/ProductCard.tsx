import React from 'react';
import { ProductType } from '../../types/miniMarketTypes';

type ProductProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow-lg max-w-xs mx-auto">
        <div
          className="w-full h-48 bg-cover bg-center rounded-lg overflow-hidden mb-4"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {/* Placeholder image URL, replace with actual image URL */}
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        {/* Price Range */}
        <p className="text-gray-600 mb-4">${product.price}</p>

        {/* Buy Now Button */}
        <button className="bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-800 transition duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
