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
              className="d-block w-100"
              src="https://source.unsplash.com/1000x600/?cupcake beside fork and knife"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1000x600/?black smartphone on black computer keyboard"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1000x600/?woman wearing one-piece swimsuit sitting on chair while looking outside"
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
