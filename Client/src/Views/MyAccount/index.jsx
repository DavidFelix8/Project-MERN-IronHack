import React, { Component } from 'react';
import './style.scss';

export class MyAccountView extends Component {
  render() {
    return (
      <section id="d-flex flex-column">
        <div className="Profile-Subs">
          <h2 className="Profile-Text">Your Subscription Includes:</h2>
          {/* <h2>{categories}</h2> */}
        </div>
        <div className="Profile-Subs">
          <h2 className="Profile-Text">Your subscription ends at:</h2>
        </div>
        <a href="cancel-subscription">Cancel Subscription</a>
      </section>
    );
  }
}

export default MyAccountView;
