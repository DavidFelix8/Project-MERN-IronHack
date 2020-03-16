import React, { Component } from 'react';
import './style.scss';

import { list as listSubscriptions } from './../../services/subscription';
import SubscriptionsList from '../../components/SubscriptionList';

class SubscriptionListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listSubscriptions()
      .then(subscriptions => {
        this.setState({
          subscriptions
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.subscriptions.map(subscription => (
          <SubscriptionsList key={subscription._id} {...subscription} />
        ))}
      </div>
    );
  }
}

export default SubscriptionListView;
