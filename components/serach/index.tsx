'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  onSearchResults: (results: any) => void;
  onLoading(setLoading: boolean): void;
};

const SearchBar = ({ onSearchResults, onLoading }: Props) => {
  const [query, setQuery] = useState('');
  const [cache, setCache] = useState<Map<string, any>>(new Map());

  const fetchData = async (query: string) => {
    onLoading(true);
    if (cache.has(query)) {
      onLoading(false)
      onSearchResults(cache.get(query));
      return;
    }

    try {
      const response = await axios.get(`/villages/api/village?query=${query}`);
      const results = response.data || [];
      setCache(new Map(cache).set(query, results));
      onSearchResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
      onSearchResults([]);
    } finally {
      onLoading(false);
    }
  };

  const onNameSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      const timerId = setTimeout(() => {
        fetchData(query);
      }, 1000); // Debounce delay

      return () => clearTimeout(timerId);
    } else {
      onSearchResults([]);
    }
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={onNameSet}
      placeholder="Search villages..."
      className="placeholder:italic placeholder:text-slate-600 mx-2  mb-2 focus:outline-2  focus:outline-purple-500 p-2 rounded-lg border-2 border-blue-200 focus:border-none focus:outline-none"
    />
  );
};

export default SearchBar;

