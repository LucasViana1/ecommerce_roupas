import React from 'react';
import './styles.css';

import ProductSale from '../../components/ProductSale';

const Home = () => {
  return (
    <main className="home">
      <ProductSale />
      <ProductSale />
      <ProductSale />
      <ProductSale />
      <ProductSale />
    </main>
  );
};

export default Home;
