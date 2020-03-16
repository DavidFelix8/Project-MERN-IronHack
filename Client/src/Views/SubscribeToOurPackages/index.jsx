import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class SubscribeToOurPackagesView extends Component {
  render() {
    return (
      <section className="SubscribeToOurPackages-Section">
        <hr />
        <Link to="/subscriptions" target="_blank" className="SubscribeToOurPackages-link">
          SUBSCRIBE TO OUR PACKAGES !
        </Link>
      </section>
    );
  }
}

export default SubscribeToOurPackagesView;
