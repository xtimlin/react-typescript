import React, { useContext, useState } from 'react';
import MiniMarketContext from '../../context/miniMarketContext';
import { MiniMarketContextType } from '../../types/miniMarketTypes';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchProducts } = useContext(
    MiniMarketContext,
  ) as MiniMarketContextType;

  const handleSearch = (e: React.FormEvent, searchTerm: string) => {
    e.preventDefault();
    searchProducts(searchTerm);
    setSearchTerm('');
  };

  return (
    <form
      className="flex items-center justify-center"
      onSubmit={(e) => handleSearch(e, searchTerm)}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Item Here"
        className="w-4/5 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </form>
  );
};

export default SearchBar;
