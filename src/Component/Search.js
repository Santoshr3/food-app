// Search.js
import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-section">
      <input
      className='search-section'
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
