import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './style.scss';

import formatPrice from './../../utilities/format-price';

function SubscriptionList(props) {
  return (
    <section>
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
            <Card.Text>Services Included: {props.categories}</Card.Text>
            <Card.Text>
              <span>Price: {formatPrice(props.price)}</span>
            </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default SubscriptionList;
