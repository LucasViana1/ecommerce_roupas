import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModalCart } from '../../store/modules/cart/action';

import ModalCart from '../ModalCart';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const { openCart } = useSelector((state: any) => state.cart);

  return (
    <header className="header">
      <Link to="/">
        <section className="header__logo">
          {/* <img src={logo} alt="Logo" /> */}
          <h1>FASHIONISTA</h1>
        </section>
      </Link>
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
