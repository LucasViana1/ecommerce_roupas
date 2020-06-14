import React, { useState, useEffect } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsStorage } from '../../store/modules/product/action';

import ProductSale from '../../components/ProductSale';
import Footer from '../../components/Footer';
import api from '../../services/api';
// import dados from '../../data.json';

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

  useEffect(() => {
    const loadProducts = async () => {
      const productsList = await api.get('/').then((response) => response.data);
      // const productsList = dados;
      // console.log('response');
      // console.log(data);
      const setializedData = productsList.map((item: any, index: number) => ({
        id: index,
        ...item,
      }));
      // console.log('setializedData');
      // console.log(setializedData);
      dispatch(setProductsStorage(setializedData));
    };
    loadProducts();
  }, []);

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
