import React, { Component } from 'react';
import { editUserInformation } from '../../services/authentication';

import './style.scss';

class PrivateEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subscription: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    //this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      // ...this.props.user
      name: this.props.user.name,
      email: this.props.user.email,
      subscription: null
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, subscription } = this.state;
    try {
      const user = await editUserInformation({
        name,
        email,
        subscription
      });
      this.props.updateUserInformation(user);
      this.props.history.push('/my-account');
    } catch (error) {
      console.log(error);
    }
  }

  /*handleFileInputChange(event) {
    console.dir(event.target);
    const { name, files } = event.target;
    this.setState({
      [name]: files[0]
    });
  }
  
*/

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const user = this.props.user;
    return (
      <section className="PrivateEdit-SectionMaster">
        <p className="mt-4">Type of subscription {user.subscription}</p>

        <form className="PrivateEdit-Form" onSubmit={this.handleFormSubmission}>
          <label className="PrivateEdit-Label" htmlFor="name">
            Name:
          </label>
          <input
            className="PrivateEdit-Input"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label className="PrivateEdit-Label" htmlFor="email">
            Email:
          </label>
          <input
            className="PrivateEdit-Input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />

          <button className="PrivateEdit-btn-Update" variant="outline-secondary">
            Update Profile
          </button>
          <div className="PrivateEdit-Subs">
            <a className="PrivateEdit-changeSubs" href="/subscriptions">
              Change Subscription Type
            </a>
            <a className="PrivateEdit-cancelSubs" href="/cancel-subscription">
              Cancel Subscription
            </a>
          </div>
        </form>
      </section>
    );
  }
}

export default PrivateEditView;
