import React, { createContext, useState } from 'react';
import { ProductType, MiniMarketContextType } from '../types/miniMarketTypes';
import { marketProducts } from '../data/miniMarketData';

const MiniMarketContext = createContext<MiniMarketContextType | null>(null);

const MiniMarketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>(marketProducts);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const searchProducts = (searchTerm: string) => {
    const filteredProducts = marketProducts.filter((product: ProductType) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setProducts(filteredProducts);
  };

  const updateCartItemQuantity = (cartItem: ProductType) => {
    const updateCartItems = cartItems.map((item) => {
      if (item.name === cartItem.name) {
        return { ...item, quantity: cartItem.quantity };
      } else {
        return item;
      }
    });

    setCartItems(updateCartItems);
  };

  const counterUpdateCartItemQuantity = (cartItem: ProductType) => {
    const productIndex = cartItems.findIndex(
      (product) => product.name.toLowerCase() === cartItem.name.toLowerCase(),
    );

    let newCartItems;

    if (productIndex !== -1) {
      if (
        cartItem.quantity === 0 ||
        cartItem.quantity + cartItems[productIndex].quantity === 0
      ) {
        newCartItems = cartItems.filter(
          (product) =>
            product.name.toLowerCase() !== cartItem.name.toLowerCase(),
        );
      } else {
        newCartItems = cartItems.map((product, index) =>
          index === productIndex
            ? { ...product, quantity: product.quantity + cartItem.quantity }
            : product,
        );
      }
    } else if (cartItem.quantity > 0) {
      newCartItems = [...cartItems, cartItem];
    } else {
      return;
    }

    setCartItems(newCartItems);
  };

  const emptyCartItems = () => {
    setCartItems([]);
  };

  return (
    <MiniMarketContext.Provider
      value={{
        products,
        cartItems,
        emptyCartItems,
        searchProducts,
        counterUpdateCartItemQuantity,
        updateCartItemQuantity,
      }}
    >
      {children}
    </MiniMarketContext.Provider>
  );
};

export { MiniMarketProvider };
export default MiniMarketContext;
