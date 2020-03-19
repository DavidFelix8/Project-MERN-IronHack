import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class PrivateView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const user = this.props.user;
    console.log(user);
    //User Undefined
    return (
      <div>
        <div>
          {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
          <h1>{user.name}</h1>
          <span>{user.email}</span>
        </div>
        <section id="d-flex flex-column">
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your Subscription Includes:</h2>
            {/* <h2>{categories}</h2> */}
            <ul className="MyAccount-Includes">
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
