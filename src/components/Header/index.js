import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <section className="header__logo">
        <img src={logo} alt="Logo" />
      </section>
      <section className="header__icons">
        <div className="header__search">
          <i className="fas fa-search" />
        </div>
        <div className="header__cart">
          <i className="fas fa-cart-arrow-down" />
        </div>
      </section>
    </header>
  );
};

export default Header;
