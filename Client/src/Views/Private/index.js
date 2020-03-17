import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class PrivateView extends Component {
  render() {
    const user = this.props.user;
    // console.log(user)
    //User Undefined
    return (
      <div>
        {/* <div>
            <h1>{user.name}</h1>
            <span>{user.email}</span>
          </div>  */}
        <section id="d-flex flex-column">
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your Subscription Includes:</h2>
            {/* <h2>{categories}</h2> */}
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
