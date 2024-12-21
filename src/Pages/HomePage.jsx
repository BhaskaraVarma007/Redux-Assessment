import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import ProductList from '../Components/ProductList';
import SortOptions from '../Components/SortOptions';
import ThemeToggle from '../Components/ThemeToggle';
import ProductSearch from '../Components/ProductSearch';  
import withNoProducts from '../hoc/withNoProducts';

const ProductListWithHOC = withNoProducts(ProductList);

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);  
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  useEffect(() => {
    setSortedProducts(products);  
  }, [products]);

  return (
    <div>
      <ThemeToggle />
      <ProductSearch products={products} setSortedProducts={setSortedProducts} /> {/* Add ProductSearch */}
      <SortOptions products={sortedProducts} setSortedProducts={setSortedProducts} />
      <ProductListWithHOC products={sortedProducts} />
    </div>
  );
};

export default HomePage;
