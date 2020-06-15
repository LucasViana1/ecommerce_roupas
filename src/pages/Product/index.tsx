import React, { useEffect, useState } from 'react';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getProductById } from '../../store/modules/product/action';
import {
  putProductInCart,
  cartQuantity,
  cartTotal,
} from '../../store/modules/cart/action';

import Footer from '../../components/Footer';

const Home = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log('use selector');
  const { product } = useSelector((state: any) => state.product);
  const { productList } = useSelector((state: any) => state.cart);
  console.log(productList);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  function handleSize(size: string) {
    setSelectedSize(size);
    console.log('selectedSize');
    console.log(size);
  }

  function handleSubmit() {
    if (selectedSize === '') {
      toast.error('Selecione o tamanho!');
      return;
    }

    const duplicate = productList.filter((item: any) => item.id === product.id);

    if (duplicate.length !== 0 && duplicate[0].selectedSize === selectedSize) {
      toast.error('Produto já adicionado ao carrinho!');
      return;
    }

    dispatch(cartTotal(product.price));
    dispatch(putProductInCart({ ...product, selectedSize }));

    dispatch(cartQuantity(1));

    toast.success('Produto adicionado ao carrinho!');
    history.push('/');
  }

  return (
    <>
      <article className="product">
        <h2>DETALHES</h2>
        {console.log('product view')}
        {console.log(product)}
        {product && (
          <div className="product__container">
            <section className="product__image">
              <img
                src={
                  product.image ||
                  'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                }
                alt={product.name}
              />
            </section>
            <section className="product__detail">
              <h3>{product.name}</h3>
              <div className="product__price">
                {/* {product.actual_price} */}
                <div
                  className={
                    product.discount_percentage ? 'product__priceold' : ''
                  }
                >
                  {product.regular_price}
                </div>
                {product.discount_percentage ? product.actual_price : ''}
                <span> em até {product.installments}</span>
              </div>
              <div className="product__size">
                <p>Escolha o tamanho</p>
                {/* <button type="button">P</button>
              <button type="button">M</button>
              <button type="button">G</button>
              <button type="button">GG</button> */}
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
        )}
      </article>
      <Footer fixed />
    </>
  );
};

export default Home;
