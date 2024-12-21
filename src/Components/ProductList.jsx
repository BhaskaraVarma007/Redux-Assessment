import React from 'react';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
      </div>
    ))}
  </div>
);

export default ProductList;