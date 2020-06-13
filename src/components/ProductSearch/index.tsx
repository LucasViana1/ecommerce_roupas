import React from 'react';
import './styles.css';

interface ProductSearchProps {
  detail: {
    id: number;
    quantity: number;
    actual_price: string;
    discount_percentage: string;
    image: string;
    installments: string;
    name: string;
    regular_price: string;
    selectedSize: string;
  };
}

const ProductSearch: React.FC<ProductSearchProps> = ({ detail }) => {
  return (
    <>
      <article className="productsearch">
        <section className="productsearch__avatar">
          <img src={detail.image} alt={detail.name} />
        </section>
        <section className="productsearch__details">
          <strong>{detail.name}</strong>
          <div>
            <span>{detail.actual_price}</span>
            <span>{detail.installments}</span>
          </div>
        </section>
      </article>
      <hr style={{ width: '94%' }} />
    </>
  );
};

export default ProductSearch;
