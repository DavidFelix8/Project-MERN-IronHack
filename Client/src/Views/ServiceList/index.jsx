import React, { Component } from 'react';
import './style.scss';

class ServiceListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount() {}

  fetchData() {}

  render() {
    return (
      <div>
        <p>Here is our Service List</p>
      </div>
    );
  }
}

export default ServiceListView;
