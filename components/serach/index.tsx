'use client';

import React, { useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    
    <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search villages..."
        className="placeholder:italic placeholder:text-slate-600 mx-2  mb-2 focus:outline-2  focus:outline-blue-500 p-2 rounded-lg border-2 focus:border-none focus:outline-none"
    />
  );
}

export default SearchBar;

