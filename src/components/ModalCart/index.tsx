import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { openModalCart } from '../../store/modules/cart/action';

import ProductCart from '../ProductCart';

const ModalCart = () => {
  const dispatch = useDispatch();

  return (
    <article className="cart">
      <header className="cart__header">
        <button type="button" onClick={() => dispatch(openModalCart(false))}>
          <FiXSquare className="cart__icon--x" />
        </button>
        <span>
          <p>Sacola (3)</p>
        </span>
      </header>
      <section className="cart__products">
        {/* loop carrinho */}
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </section>
    </article>
  );
};

export default ModalCart;
