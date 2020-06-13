import React, { useState } from 'react';
import './styles.css';

import { useDispatch } from 'react-redux';
import { FiTrash2, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { removeProductFromCart } from '../../store/modules/cart/action';

interface ProductCartProps {
  detail: {
    id: number;
    quantity: number;
    actual_price: string;
    discount_percentage: string;
    image: string;
    installments: string;
    name: string;
    regular_price: string;
    selectedSize: string;
  };
  handleRemove: (remove: boolean) => void;
  remove: boolean;
}

const ProductCart: React.FC<ProductCartProps> = ({
  detail,
  handleRemove,
  remove,
}) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  function handleQuantity(minus = false) {
    if (minus) {
      if (quantity === 1) setQuantity(quantity);
      else setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function handleRemoveProduct() {
    dispatch(removeProductFromCart(detail.id));
    handleRemove(!remove);
  }

  return (
    <>
      <article className="productcart">
        <section className="productcart__avatar">
          <img src={detail.image} alt={detail.name} />
        </section>
        <section className="productcart__details">
          <strong>{detail.name}</strong>
          {console.log(detail)}
          <div>
            <span>{detail.actual_price}</span>
            <span>{detail.installments}</span>
          </div>
        </section>
        <section className="productcart__buttons">
          <div className="productcart__quantify">
            <button type="button" onClick={() => handleQuantity(true)}>
              <FiMinusCircle className="productcart__icons--minusplus" />
            </button>
            <input type="text" name="qtd" id="qtd" readOnly value={quantity} />
            <button type="button" onClick={() => handleQuantity()}>
              <FiPlusCircle className="productcart__icons--minusplus" />
            </button>
          </div>
          <button
            type="button"
            className="productcart__buttons--remove"
            onClick={() => handleRemoveProduct()}
          >
            <span>
              <FiTrash2 className="productcart__icons--remove" />
            </span>
            REMOVER
          </button>
        </section>
      </article>
      <hr style={{ width: '94%' }} />
    </>
  );
};

export default ProductCart;
