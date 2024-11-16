import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Item Here"
        className="w-4/5 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
