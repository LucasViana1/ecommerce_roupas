import React from 'react';
import './styles.css';

const ProductCart = () => {
  return (
    <>
      <article className="productcart">
        <section className="productcart__avatar">
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
            alt="vestido"
          />
        </section>
        <section className="productcart__details">
          <strong>VESTIDO TRANSPASSE BOW</strong>
          <div>
            <span>R$ 200,00</span>
            <span>4x R$ 50,00</span>
          </div>
        </section>
        <section className="productcart__buttons">
          <div className="productcart__quantify">
            <button type="button">+</button>
            <input type="text" name="qtd" id="qtd" readOnly value={1} />
            <button type="button">-</button>
          </div>
          <button type="button">Remover</button>
        </section>
      </article>
      <hr style={{ width: '94%' }} />
    </>
  );
};

export default ProductCart;
