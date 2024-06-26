import React, { useState } from 'react';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input 
      type="text" 
      value={searchTerm} 
      onChange={handleChange} 
      placeholder="Search..." 
    />
  );
};

export default SearchBox;
