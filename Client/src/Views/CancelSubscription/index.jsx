import React, { Component } from 'react';

export class CancelSubscriptionView extends Component {
  render() {
    return (
      <div>
        <form action="" className="d-flex flex-column">
          <label htmlFor="">Why did you decided to Cancel the Subscription?</label>
          <input type="text" />
          <label htmlFor="">What can we do to improve?</label>
          <input type="text" />
          <label htmlFor="">Would you recommend this platform to the people you know?</label>
          <select id="recommendation">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </form>
        <div>
          <h2>Do you really want to cancel?</h2>
          <button>Click Here to Continue</button>
        </div>
      </div>
    );
  }
}

export default CancelSubscriptionView;
