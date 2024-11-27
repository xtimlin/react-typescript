import React from 'react';
import { MiniMarketProvider } from '../context/miniMarketContext';
import SearchBar from '../components/miniMarket/SearchBar';
import ProductList from '../components/miniMarket/ProductList';
import ShoppingCart from '../components/miniMarket/ShoppingCart';

const MiniMarketPage: React.FC = () => {
  return (
    <MiniMarketProvider>
      <SearchBar />
      <div className="relative ">
        <div className=" right-[-10px] top-[-30px] absolute">
          <ShoppingCart />
        </div>

        <div className="w-[98%]">
          <ProductList />
        </div>
      </div>
    </MiniMarketProvider>
  );
};

export default MiniMarketPage;
