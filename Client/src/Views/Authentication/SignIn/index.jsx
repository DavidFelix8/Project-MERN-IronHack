import React, { Component } from 'react';
import { signIn } from './../../../services/authentication';
import { Button, Form } from 'react-bootstrap';
import './style.scss';

class AuthenticationSignInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await signIn({
        email,
        password
      });
      this.props.updateUserInformation(user);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form className="container-form" onSubmit={this.handleFormSubmission}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="form-textsign mt-0  text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AuthenticationSignInView;
