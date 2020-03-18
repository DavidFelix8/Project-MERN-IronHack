import React, { Component } from 'react';
import './style.scss';

import { list } from './../../services/subscription';
import SubscriptionsList from '../../components/SubscriptionList';

class SubscriptionListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    // console.log('Running');
    this.fetchData();
  }

  async fetchData() {
    try {
      const subscriptions = await list();
      console.log(subscriptions);
      this.setState({ subscriptions });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const subscriptions = this.state.subscriptions;
    return (
      <div>
        {/* <p>This is Subscription List</p> */}
        <ul className="SubscriptionView-Ul">
          {subscriptions.map(subscription => (
            <SubscriptionsList key={subscription._id} {...subscription} />
          ))}
        </ul>
      </div>
    );
  }
}

export default SubscriptionListView;
