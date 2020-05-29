import React from 'react';
import './styles.css';

const ProductSale = () => {
  return (
    <article className="productsale">
      <section className="productsale__container">
        <img
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
          alt="vestido"
        />
        <strong>VESTIDO TRANSPASSE BOW</strong>
        <span>R$ 199,00</span>
      </section>
    </article>
  );
};

export default ProductSale;
