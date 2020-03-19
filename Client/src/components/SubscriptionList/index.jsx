import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './style.scss';

import formatPrice from './../../utilities/format-price';

function SubscriptionList(props) {
  return (
    <section>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <div className="d-flex flex-column justify-content-md-around align-items-center mt-4">
        <h1 className="text-capitalize">{props.title}</h1>
        <Card className="SubscriptionList-Card" style={{ width: '18rem', height: '30rem' }}>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/1000x600/?star"
            alt="Subscription"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title></Card.Title>
            <Card.Text>
              <span className="font-weight-bold">Services Included:</span>
              <span className="d-block">{`${props.categories}`}</span>
            </Card.Text>
            <Card.Text>
              <span>
                <span className="font-weight-bold">Price:</span> {formatPrice(props.price)}
              </span>
            </Card.Text>
            <Button variant="primary" onClick={props.handleSubscriptionPurchase}>
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default SubscriptionList;
