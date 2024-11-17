import React, { createContext, useState } from 'react';
import { ProductType, MiniMarketContextType } from '../types/miniMarketTypes';
import { marketProducts } from '../data/miniMarketData';

const MiniMarketContext = createContext<MiniMarketContextType | null>(null);

const MiniMarketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>(marketProducts);

  const searchProducts = (searchTerm: string) => {
    const filteredProducts = marketProducts.filter((product: ProductType) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setProducts(filteredProducts);
  };

  return (
    <MiniMarketContext.Provider value={{ products, searchProducts }}>
      {children}
    </MiniMarketContext.Provider>
  );
};

export { MiniMarketProvider };
export default MiniMarketContext;
