import React, { useEffect, useState } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { openModalCart } from '../../store/modules/cart/action';

import ProductCart from '../ProductCart';

const ModalCart = () => {
  const [productsWithQuantity, setProductsWithQuantity] = useState([]);
  const [amount, setAmount] = useState(0);
  const [remove, setRemove] = useState(false);

  const dispatch = useDispatch();

  const { productList } = useSelector((state: any) => state.cart);

  useEffect(() => {
    const list: any = [];

    for (let i = 0; i < productList.length; i += 1) {
      list[i] = {
        ...productList[i],
        quantity: 1,
      };
    }

    setProductsWithQuantity(list);
    setAmount(list.length);

    // list.sort(function compare(a: any, b: any) {
    //   if (a.id < b.id) return -1;
    //   if (a.id > b.id) return 1;
    //   return 0;
    // });
    // console.log('list cart...');
    // console.log(list);

    // for (let i = 0; i < list.length; i += 1) {
    //   const repeatedProduct = list.findIndex((p: any) => p.id === list[i].id);
    //   if (repeatedProduct >= 0) {
    //     list[i].quantity += 1;
    //     list.splice(repeatedProduct, 1);
    //   }
    // }
  }, [remove]);

  return (
    <article className="cart">
      <header className="cart__header">
        <button type="button" onClick={() => dispatch(openModalCart(false))}>
          <FiXSquare className="cart__icon--x" />
        </button>
        <span>
          <p>Sacola ({amount})</p>
        </span>
      </header>
      <section className="cart__products">
        {/* {console.log(productsWithQuantity)} */}
        {productsWithQuantity &&
          productsWithQuantity.map((product: any) => (
            <ProductCart
              key={product.id}
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
          <button type="button" onClick={() => {}}>
            Finalizar pedido
          </button>
        )}
      </div>
    </article>
  );
};

export default ModalCart;
