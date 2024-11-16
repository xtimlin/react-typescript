import React from 'react';
import SearchBar from '../components/miniMarket/SearchBar';
import ProductList from '../components/miniMarket/ProductList';
import ShoppingCart from '../components/miniMarket/ShoppingCart';

const MiniMarket: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-15 border-2 border-red-700">
        <div className="col-start-1 col-end-11 bg-yellow-200">
          <ProductList />
        </div>
        <div className="col-start-13 col-end-11 bg-blue-200">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );

  /**
   * search bar
   * item list
   *    display items
   * shopping cart
   */
};

export default MiniMarket;
