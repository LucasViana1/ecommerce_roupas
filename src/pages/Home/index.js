import React, { useState, useEffect } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsStorage } from '../../store/modules/product/action';

import ProductSale from '../../components/ProductSale';
import api from '../../services/api';

const Home = () => {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await api.get();
      console.log('response');
      console.log(data);
      const setializedData = data.map((item, index) => {
        return {
          id: index,
          ...item,
        };
      });
      console.log('setializedData');
      console.log(setializedData);
      // salva no state local e na store
      // setProducts(setializedData);
      dispatch(setProductsStorage(setializedData));
    };
    loadProducts();
  }, []);

  return (
    <main className="home">
      {/* {console.log('REDUXXX')}
      {console.log(data)} */}
      {data &&
        data.map((product) => (
          <ProductSale key={product.code_color} product={product} />
        ))}
    </main>
  );
};

export default Home;
