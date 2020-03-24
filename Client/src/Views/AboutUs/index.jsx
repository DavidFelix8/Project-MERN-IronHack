import React from 'react';
import './style.scss';

function AboutUs() {
  return (
    <section className="About_Us-Wave">
      <div className="AboutUs-div-top d-flex flex-column">
        <h1 className="About_Us-Title">Simplify. in Lisbon</h1>
        <h5 className="About_Us-Text">
          Simplify helps the residents of Lisbon focus on their priorities, and take time off from
          managing household chores such as, getting home appliances repaired, getting the AC
          serviced, fixing electrical issues, cleaning their house and ironing clothes. Our verified
          and experienced services professional base ensures timely delivery of services at
          competitive rates, while assuring customers of safety and security.
          <span className="AboutUs-Span-SubsPack">Take care of yourself, Ease the service !!!</span>
        </h5>
      </div>
      <div className="d-flex flex-column">
        <h1 className="About_Us-Title Title-Second">We provide, you enjoy...</h1>
        <h5 className="About_Us-Text">
          Simplify brings the best of Home Maintenance and repair, Utility, Lifestyle, Health,
          Beauty services and local shopping to the customer, right where they are, all through a
          single application.
          <span className="AboutUs-Span-SubsPack">
            For that you just need to Subscribe to one of our packages.
          </span>
        </h5>
      </div>
    </section>
  );
}

export default AboutUs;
