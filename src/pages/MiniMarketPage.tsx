import React from 'react';
import { MiniMarketProvider } from '../context/miniMarketContext';
import SearchBar from '../components/miniMarket/SearchBar';
import ProductList from '../components/miniMarket/ProductList';
import ShoppingCart from '../components/miniMarket/ShoppingCart';

const MiniMarketPage: React.FC = () => {
  return (
    <MiniMarketProvider>
      <SearchBar />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <ProductList />
        </div>
        <div className="col-span-3">
          <ShoppingCart />
        </div>
      </div>
    </MiniMarketProvider>
  );
};

export default MiniMarketPage;
