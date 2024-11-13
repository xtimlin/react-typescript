import React, { useState } from 'react';

interface ImageSearchProps {
  onSearchSubmit: (val: string) => void;
}

export default function ImageSearch({ onSearchSubmit }: ImageSearchProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchSubmit(inputValue);
  };

  return (
    <div>
      <label className="page-title ">Image Search</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search-term"
            onChange={handleChange}
            id="search-term"
            placeholder="press enter to search"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        </form>
      </div>
    </div>
  );
}
