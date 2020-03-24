import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import './style.scss';

export class CancelSubscriptionView extends Component {
  render() {
    return (
      <Form className="container-cancel">
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Why did you decided to cancel your Subscription?</Form.Label>
          <Form.Control type="text" placeholder="Do you really want to cancel?" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>What can we do to improve?</Form.Label>
          <Form.Control type="text" placeholder="Improvement" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Would you recommend us to the people you know?</Form.Label>
          <Form.Control as="select" value="Choose...">
            <option value="Yes">Yes</option>
            <option value="NO">No</option>
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
