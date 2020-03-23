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
        <div className="Moreserviceoffer-div">
          <article>
            <ul>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Painter</p>{' '}
              </li>

              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Business Setup</p>{' '}
              </li>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Packers and Movers</p>{' '}
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Car Wash</p>{' '}
              </li>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Doctor at Home</p>{' '}
              </li>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Gas Stove Repair</p>{' '}
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Event Planning</p>{' '}
              </li>

              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text">- Detective Agency</p>{' '}
              </li>
              <li>
                {' '}
                <p className="MoreServicesWeOffer-Text"> - Food</p>
              </li>
            </ul>
          </article>
          {/* We wanted to make a map throught the services name and slice so it would appear just 9 */}
          {/* {services.map(service => (
            <li key={service._id}>{service.name}</li>
          ))} */}
        </div>
        <a className="MoreServicesWeOffer-ViewAll" href="/services">
          View all Categories
        </a>
      </section>
    );
  }
}

export default MoreServicesWeOfferView;
