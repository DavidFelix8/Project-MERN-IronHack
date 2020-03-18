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
        <h1 className="MoreServicesWeOffer-Title">More Services we offer:</h1>
        <div className="moreserviceoffer">
          {/* <ul>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Serviços de limpeza
                </a>{' '}
              </li>

              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Reparações eléctricas
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Brick & Stone
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Appliances
                </a>{' '}
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Reparações domésticas
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Consultas e cuidados a doentes
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Babysittting
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Relocation
                </a>{' '}
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Cabinets & Countertops
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Carpentry
                </a>{' '}
                </li>
                <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                {' '}
                -Carpet
                </a>
                </li>
                <li>
                {' '}
                <a href="/" className="MoreServicesWeOffer-Text">
                  -Concrete
                  </a>{' '}
                  </li>
                </ul> */}
          {services.map(service => (
            <li key={service._id}>{service.name}</li>
          ))}
        </div>

        <a href="/services">View all Categories</a>
      </section>
    );
  }
}

export default MoreServicesWeOfferView;
