import React, { Component } from 'react';
import './style.scss';

class MostPopularServicesView extends Component {
  render() {
    return (
      <section>
        <h1 className="MostPopularServices-Title">Most Popular Services</h1>
        <div className="MostPopularServces-Div d-flex justify-content-around">
          <picture>
            <img
              className="MostPopularServices-Img"
              src=".\images\PopularServices\CleaningIcon.png"
              alt="CleaningIcon"
            />
            <h5 className="MostPopularServices-Text">Cleaning</h5>
          </picture>
          <picture>
            <img
              className="MostPopularServices-Img"
              src=".\images\PopularServices\BusinessIcon.png"
              alt="BusinessIcon"
            />
            <h5 className="MostPopularServices-Text">Business</h5>
          </picture>
          <picture>
            <img
              className="MostPopularServices-Img"
              src=".\images\PopularServices\DeliveryIcon.png"
              alt="DeliveryIcon"
            />
            <h5 className="MostPopularServices-Text">Delivery</h5>
          </picture>
        </div>
        <hr className="MostPopularServices-hr" />
      </section>
    );
  }
}

export default MostPopularServicesView;
