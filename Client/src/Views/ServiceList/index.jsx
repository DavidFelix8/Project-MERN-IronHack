import React, { Component } from 'react';
import { list } from './../../services/service';

class ServiceListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    console.log('im running');
    this.fetchData();
  }

  async fetchData() {
    try {
      const services = await list();
      this.setState({ services });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const services = this.state.services;
    return (
      <div>
        <p>Here is our Service List</p>
        <ul>
          {services.map(service => (
            <li>{service.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ServiceListView;
