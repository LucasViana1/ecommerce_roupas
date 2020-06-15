import React, { useState, useEffect } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsStorage } from '../../store/modules/product/action';
import { cartQuantity } from '../../store/modules/cart/action';

import ProductSale from '../../components/ProductSale';
import Footer from '../../components/Footer';
import api from '../../services/api';

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

const Home = () => {
  const dispatch = useDispatch();

  const { data }: { data: ProductState } = useSelector(
    (state: any) => state.product
  );
  const { productList } = useSelector((state: any) => state.cart);

  useEffect(() => {
    const loadProducts = async () => {
      const productsList = await api.get('/').then((response) => response.data);

      const setializedData = productsList.map((item: any, index: number) => {
        let [, price] = item.actual_price.split(' ');
        price = Number(price.replace(',', '.'));

        return { id: index, price, ...item };
      });

      dispatch(setProductsStorage(setializedData));
    };
    loadProducts();
  }, []);

  // useEffect(() => {
  //   dispatch(cartLoad());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(cartQuantity(productList.length));
  // }, [productList]);

  return (
    <>
      <main className="home">
        <div className="home__image" />

        {data &&
          data.map((product: any) => (
            <ProductSale key={product.code_color} product={product} />
          ))}
      </main>
      <Footer fixed={false} />
    </>
  );
};

export default Home;
