import React from 'react';
import './style.scss';

function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-links">
        <ul className="Footer-ul">
          <li>
            <a>Terms and Conditions</a>
          </li>
          <li>
            <a>FAQ</a>
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
            <a>Cancellation Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-adress"></div>
      <div className="footer-icons">
        <img className="icons" src="./images/SocialIcons/icon-insta.png"></img>
        <img className="icons" src="./images/SocialIcons/icon-facebook.png"></img>
        <img className="icons" src="./images/SocialIcons/icon-whatsapp.png"></img>
        <img className="icons" src="./images/SocialIcons/icon-twitter.png"></img>
        <img className="icons" src="./images/SocialIcons/icon-youtube.png"></img>
      </div>
    </div>
  );
}

export default Footer;
