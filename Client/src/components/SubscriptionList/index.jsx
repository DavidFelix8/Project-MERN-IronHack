import React from 'react';
import { Card, Button } from 'react-bootstrap';

function SubscriptionList(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <div className="d-flex justify-content-md-around">
        <Card style={{ width: '18rem', height: '30rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" alt="Image" />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title></Card.Title>
            <Card.Text>Services Included: {props.categories}</Card.Text>
            <Button variant="primary">{props.price.amount}</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default SubscriptionList;
