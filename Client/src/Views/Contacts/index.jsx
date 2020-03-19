import React, { Component } from 'react';

import './style.scss';

class ContactsView extends Component {
  render() {
    return (
      <div className="Contact-Main">
        <div className="Contact-Heading">
          <h5>Any Doubt?</h5>
          <h5>Ask us here!!!</h5>
        </div>

        <form className="Contact-Form">
          <div className="Contact-First-Form">
            <div className="Contact-Inner-Form">
              <label className="label" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Tell us your First Name..."
              />
            </div>
            <div className="Contact-Inner-Form">
              <label className="label" htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Tell us your Last Name..."
              />
            </div>
            <div className="Contact-Inner-Form">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input type="text" placeholder="json@whateveryouremailis.com" />
            </div>
            <div className="Contact-Inner-Form">
              <label className="label">Phone</label>
              <input type="text" placeholder="1234567890" />
            </div>
          </div>

          <div className="Contact-Second-Form">
            <div className="Contact-Inner-Form">
              <label className="label" htmlFor="subject">
                subject
              </label>
              <input type="text" placeholder="Subject" />
            </div>
          </div>

          <div className="Contact-Third-Form">
            <div className="Contact-Inner-Form">
              <label className="label" htmlFor="message">
                message
              </label>
              <textarea placeholder="Your message"></textarea>
            </div>
          </div>

          <input className="button-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactsView;
