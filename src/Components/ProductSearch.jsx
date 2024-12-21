import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;

const ProductSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query); 
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for a product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default ProductSearch;