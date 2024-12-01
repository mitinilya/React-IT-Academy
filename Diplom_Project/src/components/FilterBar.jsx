import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ minPrice, maxPrice, brand });
  };

  return (
    <div className="filter-bar">
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min price"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max price"
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
      </label>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
