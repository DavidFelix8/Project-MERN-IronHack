import React, { Component } from 'react';
import { signIn } from './../../../services/authentication';

import './style.scss';

class AuthenticationSignInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Don',
      email: 'john@don.com',
      password: '123456789'
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
      <section className="SignIn-SectionMaster">
        <form
          className="SignIn-Form"
          onSubmit={this.handleFormSubmission}
          className="d-flex flex-column"
        >
          <label className="SignIn-Label" htmlFor="email">
            Email
          </label>
          <input
            className="SignIn-Input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <label className="SignIn-Label" htmlFor="password">
            Password
          </label>
          <input
            className="SignIn-Input"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <button className="SignIn-btn">Sign In</button>
        </form>
      </section>
    );
  }
}

export default AuthenticationSignInView;
