import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModalCart } from '../../store/modules/cart/action';

import logo from '../../assets/logo.png';
import ModalCart from '../ModalCart';

const Header = () => {
  const dispatch = useDispatch();

  const { openCart } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <section className="header__logo">
        <img src={logo} alt="Logo" />
      </section>
      <section className="header__icons">
        <button type="button" className="header__search">
          <i className="fas fa-search" />
        </button>
        <button
          type="button"
          className="header__cart"
          onClick={() => dispatch(openModalCart(true))}
        >
          <i className="fas fa-cart-arrow-down" />
        </button>
      </section>
      {openCart ? <ModalCart /> : null}
    </header>
  );
};

export default Header;
