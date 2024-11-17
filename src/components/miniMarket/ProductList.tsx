import React, { useContext } from 'react';

import ProductCard from './ProductCard';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

const ProductList: React.FC = () => {
  const { products } = useContext(MiniMarketContext) as MiniMarketContextType;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
