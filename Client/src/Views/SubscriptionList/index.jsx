import React, { Component } from 'react';
import './style.scss';

import { list, select as selectSubscription } from './../../services/subscription';
import SubscriptionsList from '../../components/SubscriptionList';

class SubscriptionListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleSubscriptionPurchase = this.handleSubscriptionPurchase.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const subscriptions = await list();
      this.setState({ subscriptions });
    } catch (error) {
      console.log(error);
    }
  }

  async handleSubscriptionPurchase(id) {
    console.log('purchasing subscription ', id);
    try {
      const subscription = await selectSubscription(id);
      console.log('Purchased subscription', subscription);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const subscriptions = this.state.subscriptions;
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        <ul className="SubscriptionView-Ul">
          {subscriptions.map(subscription => (
            <SubscriptionsList
              key={subscription._id}
              {...subscription}
              handleSubscriptionPurchase={() => this.handleSubscriptionPurchase(subscription._id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SubscriptionListView;
