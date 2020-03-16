import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './../../Views/AboutUs';
import CarrouselView from './../../Views/Carrousel';
import MostPopularServicesView from './../../Views/MostPopularService';
import MoreServicesWeOfferView from './../../Views/MoreServicesWeOffer';
import SubscribeToOurPackagesView from './../../Views/SubscribeToOurPackages';

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <CarrouselView />
          <AboutUs />
          <MostPopularServicesView />
          <MoreServicesWeOfferView />
          <SubscribeToOurPackagesView />
        </BrowserRouter>
      </div>
    );
  }
}

export default HomeComponent;
