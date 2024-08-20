// Example React component calling the API endpoint
"use client"
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const populateDatabase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/pages/api/populateDatabase', {
        method: 'POST', // Use POST to trigger database population
      });
      if (!response.ok) {
        throw new Error('Failed to populate database');
      }
      const data = await response.json();
      console.log(data); // Handle response from the API
    } catch (error) {
      console.error('Failed to populate database:', error);
      // Handle error state (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   // Call the populateDatabase function when component mounts (or based on an event)
  //   populateDatabase();
  // }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <button onClick={populateDatabase} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Populate Database'}
      </button>
    </div>
  );
};

export default MyComponent;

