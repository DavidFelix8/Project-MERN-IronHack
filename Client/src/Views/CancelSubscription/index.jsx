import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import './style.scss';

export class CancelSubscriptionView extends Component {
  render() {
    return (
      <Form className="container-cancel">
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Why did you decided to cancel your Subscription?</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>What can we do to improve?</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select Option</Form.Label>
          <Form.Control as="select" value="Choose...">
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Text className="form-text">Do you really want to cancel?</Form.Text>
        <Button className="form-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CancelSubscriptionView;
