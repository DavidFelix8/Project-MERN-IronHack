import React, { Component } from 'react';
//import { Parallax, Image } from 'react-scroll-parallax';
import './style.scss';

class MoreServicesWeOfferView extends Component {
  constructor(props) {
    super();
    this.state = {
      services: []
    };
  }
  render() {
    const services = this.state.services;
    return (
      <section>
        <h1 className="MoreServicesWeOffer-Title">More Services we offer</h1>
        <div className="moreserviceoffer">
          <article>
            <ul>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Painter
                </a>{' '}
              </li>

              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Business Setup
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Packers and Movers
                </a>{' '}
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Car Wash
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Doctor at Home
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Gas Stove Repair
                </a>{' '}
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Event Planning
                </a>{' '}
              </li>

              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  - Detective Agency
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  {' '}
                  - Food
                </a>
              </li>
            </ul>
          </article>
          {/* We wanted to make a map throught the services name and slice so it would appear just 9 */}
          {/* {services.map(service => (
            <li key={service._id}>{service.name}</li>
          ))} */}
        </div>
        <a href="/services">View all Categories</a>
      </section>
    );
  }
}

export default MoreServicesWeOfferView;
