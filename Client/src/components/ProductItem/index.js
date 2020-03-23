import React from 'react';
import { Link } from 'react-router-dom';

import formatPrice from './../../utilities/format-price';

const ProductItem = props => {
  return (
    <Link to={`/product/${props._id}`}>
      <figure className="product__image">
        <img src={props.image} alt={props.categories} />
      </figure>
      <header className="product__information">
        <div className="product__details">
          <strong>{props.name}</strong>
        </div>
        <div className="product__price">
          <span>{formatPrice(props.price)}</span>
        </div>
      </header>
    </Link>
  );
};

export default ProductItem;
