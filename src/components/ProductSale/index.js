import React from 'react';
// import {} from 'react-router-dom'
import './styles.css';

const ProductSale = ({ product }) => {
  const {
    id,
    name,
    image,
    actual_price,
    regular_price,
    discount_percentage,
  } = product;

  return (
    <article className="productsale">
      {console.log('props')}
      {console.log(product)}
      <section className="productsale__container">
        {/* <div> */}
        {discount_percentage ? (
          <div className="productsale_discount">
            <span>-{discount_percentage}</span>
          </div>
        ) : null}
        <img
          src={
            image ||
            `https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível`
          }
          alt={name}
        />
        {/* </div> */}
      </section>
      <section className="productsale__labels">
        <strong>{name}</strong>
        <span className="productsale__price">
          <div className={discount_percentage ? 'productsale__priceold' : ''}>
            {regular_price}
          </div>
          {discount_percentage ? actual_price : ''}
        </span>
      </section>
    </article>
  );
};

export default ProductSale;
