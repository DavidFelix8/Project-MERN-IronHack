import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './style.scss';

import { list } from './../../services/service';

class PrivateView extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  render() {
    const user = this.props.user;
    const service = this.props.service;
    console.log(service);
    // console.log(user);
    //User Undefined
    return (
      <div>
        <div>
          {<pre>{JSON.stringify(this.props, null, 2)}</pre>}
          <h1>{user.name}</h1>
          <span>{user.email}</span>
        </div>
        <section id="d-flex flex-column">
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your subscription is:</h2>
            <h2>{user.subscription}</h2>
          </div>
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your Subscription Includes:</h2>
            <ul className="MyAccount-Includes">
            {/* <h2>{service.categories}</h2> */}
              <li>sdadas</li>
              <li>dsasd</li>
              <li>dadad</li>
            </ul>
          </div>
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your subscription ends at:</h2>
          </div>
        </section>
        <Link to="/my-account/edit">Edit Profile</Link>
      </div>
    );
  }
}

export default PrivateView;
