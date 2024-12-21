import React from 'react';

const SortOptions = ({ products, setSortedProducts }) => {
  const handleSort = (type) => {
    let sorted;
    switch (type) {
      case 'PRICE_LOW_TO_HIGH':
        sorted = [...products].sort((a, b) => a.price - b.price);  // Sort by price: low to high
        break;
      case 'PRICE_HIGH_TO_LOW':
        sorted = [...products].sort((a, b) => b.price - a.price);  // Sort by price: high to low
        break;
      case 'NAME_A_Z':
        sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));  // Sort by name A-Z
        break;
      case 'NAME_Z_A':
        sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));  // Sort by name Z-A
        break;
      default:
        sorted = products; 
    }
    setSortedProducts(sorted);  
  };

  return (
    <div className="sort-options">
      <button onClick={() => handleSort('PRICE_LOW_TO_HIGH')}>Price: Low to High</button>
      <button onClick={() => handleSort('PRICE_HIGH_TO_LOW')}>Price: High to Low</button>
      <button onClick={() => handleSort('NAME_A_Z')}>Name: A-Z</button>
      <button onClick={() => handleSort('NAME_Z_A')}>Name: Z-A</button>
    </div>
  );
};

export default SortOptions;