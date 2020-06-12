import React from 'react';
import './styles.css';

import { FiTrash2, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const ProductCart = () => (
  <>
    <article className="productcart">
      <section className="productcart__avatar">
        <img
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
          alt="vestido"
        />
      </section>
      <section className="productcart__details">
        <strong>VESTIDO TRANSPASSE BOW</strong>
        <div>
          <span>R$ 200,00</span>
          <span>4x R$ 50,00</span>
        </div>
      </section>
      <section className="productcart__buttons">
        <div className="productcart__quantify">
          <button type="button">
            <FiMinusCircle className="productcart__icons--minusplus" />
          </button>
          <input type="text" name="qtd" id="qtd" readOnly value={1} />
          <button type="button">
            <FiPlusCircle className="productcart__icons--minusplus" />
          </button>
        </div>
        <button type="button" className="productcart__buttons--remove">
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

export default ProductCart;
