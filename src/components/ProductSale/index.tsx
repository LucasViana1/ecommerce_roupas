import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface ProductSaleProps {
  product: {
    id: number;
    name: string;
    image: string;
    actual_price: string;
    regular_price: string;
    discount_percentage: string;
  };
}

const ProductSale: React.FC<ProductSaleProps> = ({ product }) => {
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
      <Link to={`/product/${id}`}>
        <section className="productsale__container">
          {/* <div> */}
          {discount_percentage ? (
            <div className="productsale__discount">
              <span>-{discount_percentage}</span>
            </div>
          ) : null}
          <img
            src={
              image ||
              'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
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
      </Link>
    </article>
  );
};

export default ProductSale;
