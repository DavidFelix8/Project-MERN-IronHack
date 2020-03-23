import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem';
import { create as createPurchase } from '../../services/purchase';

class CheckoutView extends Component {
  constructor() {
    super();
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  async handlePurchase() {
    const ids = this.props.cart.map(subscriptions => subscriptions._id);
    try {
      await createPurchase(ids);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <section className="shopping__cart__products">
          {this.props.cart.map(subscription => (
            <ProductItem {...subscription} />
          ))}
        </section>
        <button onClick={this.handlePurchase}>Purchase</button>
      </div>
    );
  }
}

export default CheckoutView;
