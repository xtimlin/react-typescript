import React from 'react';
import { MiniMarketProvider } from '../context/miniMarketContext';
import SearchBar from '../components/miniMarket/SearchBar';
import ProductList from '../components/miniMarket/ProductList';
import ShoppingCart from '../components/miniMarket/ShoppingCart';

const MiniMarketPage: React.FC = () => {
  return (
    <MiniMarketProvider>
      <SearchBar />
      <div className="grid grid-cols-10 ">
        <div className="col-start-1 col-end-9 ">
          <ProductList />
        </div>
        <div className="col-start-9 col-end-11 bg-gray-100">
          <ShoppingCart />
        </div>
      </div>
    </MiniMarketProvider>
  );
};

export default MiniMarketPage;
