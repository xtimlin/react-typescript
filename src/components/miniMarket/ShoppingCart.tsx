import React, { useContext, useState } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

import CartItemCard from './CartItemCard';
import * as fa from 'react-icons/fa6';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useContext(MiniMarketContext) as MiniMarketContextType;
  const total: number = cartItems.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );
  const totalQuantity: number = cartItems.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  const [isCartOpen, setIsCartOpen] = useState(true);
  const cartItemCount = 1;
  const shoppingCartIcon = (
    <div className="relative inline-flex w-full justify-end rounded-2xl ">
      <fa.FaCartShopping
        className="text-4xl icon-style   "
        onClick={() => setIsCartOpen(!isCartOpen)}
      />

      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {totalQuantity}
        </span>
      )}
    </div>
  );

  const ShoppingContent = (
    <div className="relative bg-gray-200 rounded-3xl p-4 min-h-full w-full">
      {/* Close Icon in Top-Right Corner */}
      <FaCircleXmark
        className="absolute top-0 right-0 text-2xl cursor-pointer"
        onClick={() => setIsCartOpen(!isCartOpen)}
      />

      {/* Cart Items */}
      <div className="mt-4">
        {cartItems.map((product, index) => (
          <div key={index} className="justify-center items-center w-full">
            <CartItemCard product={product} />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-3xl text-center justify-center w-full flex p-5">
        {total > 0 ? (
          <div>
            <div className="flex">
              Total: <p className="font-bold text-red-400 pl-2">${total}</p>
            </div>
          </div>
        ) : (
          <div>Shopping Cart is Empty</div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {!isCartOpen && shoppingCartIcon}
      {isCartOpen && ShoppingContent}
    </>
  );
};

export default ShoppingCart;
