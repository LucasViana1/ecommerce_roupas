import React, { useState, ChangeEvent } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { openModalSearch } from '../../store/modules/search/action';

import ProductSearch from '../ProductSearch';

interface ProductState {
  [id: string]: any;
  product: {
    name: string;
    image: string;
    actual_price: string;
    regular_price: string;
    discount_percentage: string;
  };
}

const ModalSearch = () => {
  const [filterProducts, setFilterProducts] = useState([]);

  const dispatch = useDispatch();

  const { data }: { data: ProductState } = useSelector(
    (state: any) => state.product
  );

  function handleFilter(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFilterProducts(
      data.filter((item: any) => item.name.includes(value.toUpperCase()))
    );
  }

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
            onChange={(event) => handleFilter(event)}
          />
        </span>
      </header>
      <section className="search__products">
        {filterProducts &&
          filterProducts.map((product: any) => (
            <ProductSearch key={product.id} detail={product} />
          ))}
        {/* <ProductSearch />
        <ProductSearch />
        <ProductSearch /> */}
      </section>
    </article>
  );
};

export default ModalSearch;
