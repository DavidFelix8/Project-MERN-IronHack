import React, { Component } from 'react';
import { signUp } from './../../../services/authentication';

import './style.scss';

class AuthenticationSignUpView extends Component {
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
      <section className="SignUp-SectionMaster">
        <form className="SignUp-Form" onSubmit={this.handleFormSubmission} className="d-flex flex-column">
          <label className="SignUp-Label" htmlFor="name">Name</label>
          <input
          className="SignUp-Input"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label className="SignUp-Label" htmlFor="email">Email</label>
          <input
          className="SignUp-Input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <label className="SignUp-Label" htmlFor="password">Password</label>
          <input
          className="SignUp-Input"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          {this.state.password && this.state.password.length < 8 && (
            <small className="SignUp-PassShort">Password is too short!</small>
          )}
          <button className="SignUp-btn" disabled={this.state.password.length < 8}>Sign Up</button>
        </form>
      </section>
    );
  }
}

export default AuthenticationSignUpView;
