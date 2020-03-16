import React from 'react';
import { Card, Button } from 'react-bootstrap';

function SubscriptionList() {
  return (
    <section>
      <h1>Our Subscriptions</h1>
      <div className="d-flex justify-content-md-around">
        <Card style={{ width: '18rem', height: '30rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" alt="Image" />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default SubscriptionList;
