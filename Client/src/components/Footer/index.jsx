import React from 'react';
import './style.scss';

function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-icons">
        <img className="icons" src="./images/SocialIcons/icon-insta.png" alt="img-icons"></img>
        <img className="icons" src="./images/SocialIcons/icon-facebook.png" alt="img-icons"></img>
        <img className="icons" src="./images/SocialIcons/icon-whatsapp.png" alt="img-icons"></img>
        <img className="icons" src="./images/SocialIcons/icon-twitter.png" alt="img-icons"></img>
        <img className="icons" src="./images/SocialIcons/icon-youtube.png" alt="img-icons"></img>
      </div>
      <div className="footer-links">
        <ul className="Footer-ul">
          <li>
            <a href="/termsandconditions">Terms and Conditions</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Subscriptions">Subscriptions</a>
          </li>
          <li>
            <a href="/contact">Contacts</a>
          </li>
          <li>
            <a href="/">Cancellation Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-adress"></div>
    </div>
  );
}

export default Footer;
