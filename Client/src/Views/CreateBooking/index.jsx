import React, { Component } from 'react';
import './style.scss';

import { create as createBooking } from './../../services/booking';

class PackageSingleView extends Component {
  constructor() {
    super();
    this.state = {
      package: null,
      date: new Date().toISOString()
    };
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  componentDidMount() {
    // fetchData();
  }

  fetchData() {
    //const id = this.props.match.params.id;
    //create the data base first
  }

  handleDateInputChange(event) {
    const value = event.target.value;
    console.dir(value);
    this.setState({ date: value });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const serviceId = this.props.match.params.id;
    const date = this.state.date;
    try {
      const booking = await createBooking(serviceId, date);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h3>Create Booking</h3>
        <form onSubmit={this.handleFormSubmission}>
          <input type="date" value={this.state.date} onChange={this.handleDateInputChange} />
          <button>Create Booking</button>
        </form>
      </div>
    );
  }
}

export default PackageSingleView;
