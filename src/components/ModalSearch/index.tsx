import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { openModalSearch } from '../../store/modules/search/action';

import ProductCart from '../ProductCart';

const ModalSearch = () => {
  const dispatch = useDispatch();

  return (
    <article className="cart">
      <header className="cart__header">
        <button type="button" onClick={() => dispatch(openModalSearch(false))}>
          Fechar carrinho
        </button>
        <span>SEARCH</span>
      </header>
      <section className="cart_products">
        {/* loop carrinho */}
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </section>
    </article>
  );
};

export default ModalSearch;
