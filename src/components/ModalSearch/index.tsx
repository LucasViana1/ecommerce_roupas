import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { openModalSearch } from '../../store/modules/search/action';

import ProductSearch from '../ProductSearch';

const ModalSearch = () => {
  const dispatch = useDispatch();

  return (
    <article className="search">
      <header className="search__header">
        <button type="button" onClick={() => dispatch(openModalSearch(false))}>
          <FiXSquare className="search__icon--x" />
        </button>
        <span className="search__input">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="pesquisar..."
          />
        </span>
      </header>
      <section className="search__products">
        {/* loop search */}
        <ProductSearch />
        <ProductSearch />
        <ProductSearch />
      </section>
    </article>
  );
};

export default ModalSearch;
