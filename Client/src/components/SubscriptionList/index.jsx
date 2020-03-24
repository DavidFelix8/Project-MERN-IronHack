import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import './style.scss';

import formatPrice from './../../utilities/format-price';

class SubscriptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: []
    };
    this.handleSubscriptionPurchase = this.handleSubscriptionPurchase.bind(this);
  }
  handleSubscriptionPurchase() {
    this.props.updateCart(this.state.subscriptions);
  }
  render() {
    return (
      <section>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        <div className="d-flex flex-column justify-content-md-around align-items-center mt-4">
          <Card className="SubscriptionList-Card" style={{ width: '18rem', height: '30rem' }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title className="card-title">
                <h2>{this.props.title}</h2>
              </Card.Title>
              <Card.Text>
                <span className="font-weight-bold">Services Included:</span>
                <span className="d-block">{`${this.props.categories},`}</span>
              </Card.Text>
              <Card.Text>
                <span>
                  <span className="font-weight-bold">Price:</span> {formatPrice(this.props.price)}
                </span>
              </Card.Text>
              <Button
                href="/my-account"
                variant="secondary"
                onClick={this.props.handleSubscriptionPurchase}
              >
                Subscribe
              </Button>
              <small>
                *More info in{' '}
                <a className="underline" href="/termsandconditions">
                  Terms And Conditions
                </a>
                .
              </small>
            </Card.Body>
          </Card>
        </div>
      </section>
    );
  }
}

export default SubscriptionList;
