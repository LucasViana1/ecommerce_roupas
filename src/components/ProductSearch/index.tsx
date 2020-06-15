import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModalSearch } from '../../store/modules/search/action';

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
  const dispatch = useDispatch();

  return (
    <>
      <article className="productsearch">
        <Link
          to={`/product/${detail.id}`}
          onClick={() => dispatch(openModalSearch(false))}
        >
          <section className="productsearch__avatar">
            <img
              src={
                detail.image ||
                'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
              }
              alt={detail.name}
            />
          </section>
          <section className="productsearch__details">
            <strong>{detail.name}</strong>
            <div>
              <span>{detail.actual_price}</span>
              <span>{detail.installments}</span>
            </div>
          </section>
        </Link>
      </article>
      <hr style={{ width: '94%' }} />
    </>
  );
};

export default ProductSearch;
