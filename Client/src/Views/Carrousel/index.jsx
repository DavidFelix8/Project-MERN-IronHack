import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.scss';

class CarrouselView extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./images/Carousel/happy-familly.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./images/Carousel/cleaning-services.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./images/Carousel/can-we-help.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarrouselView;
