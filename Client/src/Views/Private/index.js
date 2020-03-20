import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

// import { list } from './../../services/service';
import { find } from './../../services/subscription';

class PrivateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: null
    };
    // console.log(this.props);
    this.getSubscription = this.getSubscription.bind(this);
  }

  componentDidMount() {
    this.getSubscription();
  }

  async getSubscription() {
    console.log('getting subscription', this.props.user.subscription);
    try {
      const sub = await find(this.props.user.subscription);
      console.log('sub', sub.sub);
      this.setState({
        subscription: sub.sub
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.props.user;
    const service = this.props.service;
    console.log('subscrition state', this.state.subscription);
    // console.log(user);
    //User Undefined
    return (
      <div>
        <div>
          {/* {<pre>{JSON.stringify(this.props, null, 2)}</pre>} */}
          <h1>{user.name}</h1>
          <span>{user.email}</span>
        </div>
        <section id="d-flex flex-column">
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your subscription is:</h2>
            {this.state.subscription && <h2>{this.state.subscription.title}</h2>}
          </div>
          <div className="MyAccount-Subs">
            <h2 className="MyAccount-Text">Your Subscription Includes:</h2>
            <ul className="MyAccount-Includes">
              {this.state.subscription && <li>{this.state.subscription.categories}</li>}
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
