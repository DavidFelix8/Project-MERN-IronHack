import React, { Component } from 'react';
import { signUp } from './../../../services/authentication';
import { Form, Button } from 'react-bootstrap';

import './style.scss';

class AuthenticationSignUpView extends Component {
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

  handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    signUp({
      name,
      email,
      password
    })
      .then(user => {
        this.props.updateUserInformation(user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            name="name"
            type="name"
            placeholder="Enter your name"
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            name="email"
            type="email"
            placeholder="Enter email"
            value={this.state.email}
          />
          <Form.Text className="text-muted">
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
            value={this.state.password}
          />
          {this.state.password && this.state.password.length < 8 && (
            <small className="SignUp-PassShort">Password is too short!</small>
          )}
        </Form.Group>
        <Button variant="secondary" type="submit" disabled={this.state.password.length < 8}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default AuthenticationSignUpView;
