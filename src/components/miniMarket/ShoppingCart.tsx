import React, { useContext } from 'react';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

import CartItemCard from './CartItemCard';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useContext(MiniMarketContext) as MiniMarketContextType;

  return (
    <div className="w-11/12, items-center, justify-center">
      Shopping Card
      {cartItems.map((product, index) => (
        <div key={index} className="justify-center, items-center">
          <CartItemCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
