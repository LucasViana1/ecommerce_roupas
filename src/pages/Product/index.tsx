import React, { useEffect, useState } from 'react';
import './styles.css';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductById } from '../../store/modules/product/action';
import { putProductInCart } from '../../store/modules/cart/action';

import Footer from '../../components/Footer';

const Home = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();

  console.log('use selector');
  const { product } = useSelector((state: any) => state.product);
  const { productList } = useSelector((state: any) => state.cart);
  console.log(productList);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  // const handleSize = useCallback((size: string) => {
  //   setSelectedSize(size);
  //   console.log('selectedSize');
  //   console.log(size);
  // }, []);
  function handleSize(size: string) {
    setSelectedSize(size);
    console.log('selectedSize');
    console.log(size);
  }

  function handleSubmit() {
    console.log('submit product');
    console.log(product);
    dispatch(putProductInCart(product));
  }

  return (
    <>
      <article className="product">
        <h2>DETALHES</h2>
        <div className="product__container">
          <section className="product__image">
            <img
              src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg"
              alt="produto qualquer"
            />
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
              {product &&
                product.sizes.map((item: any) =>
                  item.available ? (
                    <button
                      key={item.sku}
                      type="button"
                      onClick={() => handleSize(item.size)}
                      className={`${
                        selectedSize === item.size
                          ? 'product__size--selected'
                          : ''
                      }`}
                    >
                      {item.size}
                    </button>
                  ) : null
                )}
            </div>
            <div className="product__add">
              <button type="button" onClick={() => handleSubmit()}>
                Adicionar ao carrinho
              </button>
            </div>
          </section>
        </div>
      </article>
      <Footer fixed />
    </>
  );
};

export default Home;
