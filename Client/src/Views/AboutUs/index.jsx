import React from 'react';
import './style.scss';

function AboutUs() {
  return (
    <section className="About_Us-Wave">
      <div className="AboutUs-div-top d-flex flex-column">
        <h1 className="About_Us-Title">Who are we?</h1>
        <h5 className="About_Us-Text-First">We are the ones that will make your life easier...</h5>
      </div>
      <div className="d-flex flex-column">
        <h1 className="About_Us-Title Title-Second">What are we?</h1>
        <h5 className="About_Us-Text">
          We are a platform which will be here for whatever you need.
          <span>If you have any problem you just need to contact us that</span>
          <span>we take care of everything with our Sponshorships.</span>
          <span className="AboutUs-Span-SubsPack">
            For that you just need to Subscribe to one of our packages.
          </span>
        </h5>
      </div>
    </section>
  );
}

export default AboutUs;
