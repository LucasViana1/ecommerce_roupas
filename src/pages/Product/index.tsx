import React, { useEffect } from 'react';
import './styles.css';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../store/modules/product/action';

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log('use selector');
  const { product } = useSelector((state: any) => state.product);
  console.log(product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  return (
    <>
      <article className="product">
        <h2>detalhes produto</h2>
        <div className="product__container">
          <section className="product__image">
            <img
              src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg"
              alt="produto qualquer"
            />
            {/* <img src={product.image} alt={product.name} /> */}
          </section>
          <section className="product__detail">
            <h3>REGATA ALCINHA FOLK</h3>
            <div className="product__price">
              R$ 99,90 <span> em até 3x R$ 33,30</span>
            </div>
            <div className="product__size">
              <p>Escolha o tamanho</p>
              <button type="button">P</button>
              <button type="button">M</button>
              <button type="button">G</button>
              <button type="button">GG</button>
            </div>
            <div className="product__add">
              <button type="button">Adicionar ao carrinho</button>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default Home;
