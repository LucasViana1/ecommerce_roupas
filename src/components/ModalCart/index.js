import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { openModalCart } from '../../store/modules/cart/action';

import ProductCart from '../ProductCart';

const ModalCart = () => {
  const dispatch = useDispatch();

  return (
    <article className="cart">
      <header className="cart__header">
        <button type="button" onClick={() => dispatch(openModalCart(false))}>
          Fechar carrinho
        </button>
        <span>Sacola (3)</span>
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

export default ModalCart;
