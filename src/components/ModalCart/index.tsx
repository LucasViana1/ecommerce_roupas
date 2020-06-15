import React, { useEffect, useState } from 'react';
import './styles.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { openModalCart, checkOut } from '../../store/modules/cart/action';

import ProductCart from '../ProductCart';

const ModalCart = () => {
  const [productsWithQuantity, setProductsWithQuantity] = useState([]);
  const [remove, setRemove] = useState(false);

  const dispatch = useDispatch();

  const { productList } = useSelector((state: any) => state.cart);
  const { amount, total } = useSelector((state: any) => state.cart);

  useEffect(() => {
    const list: any = [];

    for (let i = 0; i < productList.length; i += 1) {
      list[i] = {
        ...productList[i],
        quantity: 1,
      };
    }

    setProductsWithQuantity(list);
  }, [remove, dispatch]);

  function handleCheckOut() {
    toast.info('Pedido finalizado!');
    dispatch(checkOut());
    dispatch(openModalCart(false));
  }

  return (
    <article className="cart">
      <header className="cart__header">
        <button type="button" onClick={() => dispatch(openModalCart(false))}>
          <FiXSquare className="cart__icon--x" />
        </button>
        <span className="cart__header--amount">
          <p>Carrinho ({amount})</p>
        </span>
      </header>
      <section className="cart__products">
        {productsWithQuantity &&
          productsWithQuantity.map((product: any) => (
            <ProductCart
              key={`${product.id}_${product.selectedSize}`}
              detail={product}
              handleRemove={setRemove}
              remove={remove}
            />
          ))}
      </section>
      <div className="cart__products--submit">
        {productsWithQuantity.length === 0 ? (
          <div>Nenhum produto no carrinho</div>
        ) : (
          <>
            <div className="cart__total">
              <span>Total: R$ {total.toFixed(2)}</span>
            </div>
            <button type="button" onClick={() => handleCheckOut()}>
              Finalizar pedido
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default ModalCart;
