import React, { createContext, useEffect, useState } from 'react';
import { ProductType, MiniMarketContextType } from '../types/miniMarketTypes';
import { marketProducts } from '../data/miniMarketData';

const MiniMarketContext = createContext<MiniMarketContextType | null>(null);

const MiniMarketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>(marketProducts);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const searchProducts = (searchTerm: string) => {
    const filteredProducts = marketProducts.filter((product: ProductType) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setProducts(filteredProducts);
  };

  const updateCartItems = (cartItem: ProductType) => {
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
      // No changes needed if quantity is 0 and product is not in the cart
      return;
    }

    setCartItems(newCartItems);
  };

  return (
    <MiniMarketContext.Provider
      value={{ products, cartItems, searchProducts, updateCartItems }}
    >
      {children}
    </MiniMarketContext.Provider>
  );
};

export { MiniMarketProvider };
export default MiniMarketContext;
