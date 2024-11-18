import React, { useContext, useState } from 'react';
import { CiCirclePlus, CiCircleMinus, CiCircleRemove } from 'react-icons/ci';
import { ProductProps } from '../../types/miniMarketTypes';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

const CartItemCard: React.FC<ProductProps> = ({ product }) => {
  const [quantityInput, setQuantityInput] = useState(product.quantity);
  const { counterUpdateCartItemQuantity, updateCartItemQuantity } = useContext(
    MiniMarketContext,
  ) as MiniMarketContextType;

  const counterUpdateQuantity = (val: number) => {
    setQuantityInput(quantityInput + val);
    counterUpdateCartItemQuantity({ ...product, quantity: val });
  };

  const updateQuantity = (val: number) => {
    setQuantityInput(val);
    updateCartItemQuantity({ ...product, quantity: val });
  };

  return (
    <div className="grid grid-cols-10 gap-1 full flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white ">
      {/* Product Image */}
      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 col-span-1">
        <img
          src={product.imageURL}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 px-4 col-span-3">
        <p className="text-sm text-gray-500 text-center">
          ${product.price.toFixed(2)}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 text-center">
          {product.name}
        </h3>
      </div>

      {/* Quantity Selector with Final Price */}
      <div className="flex items-center space-x-2 col-span-4">
        <CiCircleMinus
          className="flex items-center justify-center text-3xl hover:bg-gray-100"
          onClick={() => counterUpdateQuantity(-1)}
        />

        <input
          type="number"
          className="w-5/12 border-2 text-center rounded border-gray-300"
          value={quantityInput}
          min={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuantityInput(Number(e.target.value));
          }}
          // trigger when enter key press
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              updateQuantity(quantityInput);
            }
          }}
          // triggered when the user clicks or navigates away from the input field.
          onBlur={() => {
            updateQuantity(quantityInput);
          }}
        />

        <CiCirclePlus
          className="flex items-center justify-center text-3xl hover:bg-gray-100"
          onClick={() => counterUpdateQuantity(1)}
        />
      </div>

      {/* Final Price */}
      <span className="text-sm font-medium text-gray-800 col-span-1">
        ${product.quantity * product.price}
      </span>

      {/* Delete Icon */}
      <CiCircleRemove
        className="flex items-center justify-center text-3xl hover:bg-gray-100 col-span-1"
        onClick={() =>
          counterUpdateCartItemQuantity({ ...product, quantity: 0 })
        }
      />
    </div>
  );
};

export default CartItemCard;
