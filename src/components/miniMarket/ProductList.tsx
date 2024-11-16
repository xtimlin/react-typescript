import React from 'react';

import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[...Array(12)].map((_, index) => (
        <div key={index}>
          <ProductCard />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
