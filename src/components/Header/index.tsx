import React from 'react';
import './styles.css';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModalCart } from '../../store/modules/cart/action';
import { openModalSearch } from '../../store/modules/search/action';

import ModalCart from '../ModalCart';
import ModalSearch from '../ModalSearch';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const { openCart } = useSelector((state: any) => state.cart);
  const { openSearch } = useSelector((state: any) => state.search);

  return (
    <header className="header">
      <Link to="/">
        <section className="header__logo">
          {/* <img src={logo} alt="Logo" /> */}
          <h1>FASHIONISTA</h1>
        </section>
      </Link>
      <section className="header__icons">
        <button
          type="button"
          className="header__search"
          onClick={() => dispatch(openModalSearch(true))}
        >
          {/* <i className="fas fa-search" /> */}
          <FiSearch className="header__search--icon" />
        </button>
        <button
          type="button"
          className="header__cart"
          onClick={() => dispatch(openModalCart(true))}
        >
          {/* <i className="fas fa-cart-arrow-down" /> */}
          <FiShoppingCart className="header__cart--icon" />
        </button>
      </section>
      {openCart ? <ModalCart /> : null}
      {openSearch ? <ModalSearch /> : null}
    </header>
  );
};

export default Header;
