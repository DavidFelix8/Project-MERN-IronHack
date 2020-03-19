import React, { Component } from 'react';

import './style.scss';

export class CancelSubscriptionView extends Component {
  render() {
    return (
      <section className="CancelSubs-Section">
        <form action="" className="d-flex flex-column">
          <label htmlFor="WhyCancel">Why did you decided to Cancel the Subscription?</label>
          <textarea name="WhyCancel" id="WhyCancel" cols="30" rows="3"></textarea>
          <label htmlFor="HowImprove">What can we do to improve?</label>
          <textarea name="HowImprove" id="HowImprove" cols="30" rows="3"></textarea>
          <label htmlFor="">Would you recommend this platform to the people you know?</label>
          <select className="CancelSubs-Select" id="recommendation">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </form>
        <article className="CancelSubs-ClickCancel">
          <h2 class="CancelSubs-Text">Do you really want to cancel?</h2>
          <button>Click Here to Continue</button>
        </article>
      </section>
    );
  }
}

export default CancelSubscriptionView;
