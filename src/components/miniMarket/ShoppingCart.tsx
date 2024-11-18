import React, { useContext } from 'react';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

import CartItemCard from './CartItemCard';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useContext(MiniMarketContext) as MiniMarketContextType;
  const total: number = cartItems.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  return (
    <div className="items-center justify-center w-full">
      {cartItems.map((product, index) => (
        <div key={index} className="justify-center items-center w-full">
          <CartItemCard product={product} />
        </div>
      ))}

      <div className="text-3xl text-center justify-center w-full flex p-5">
        {total > 0 ? (
          <div className="flex">
            Total: <p className="font-bold text-red-400 pl-2">${total}</p>
          </div>
        ) : (
          <div>Shopping Cart is Empty</div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
