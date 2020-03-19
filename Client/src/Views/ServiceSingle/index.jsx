import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { load as loadService } from './../../services/service';

class PackageSingleView extends Component {
  constructor() {
    super();
    this.state = {
      service: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const id = this.props.match.params.id;
    try {
      const service = await loadService(id);
      this.setState({
        service
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const service = this.state.service;
    return (
      <div>
        {service && (
          <div>
            <h1>{service.name}</h1>
            <Link to={`/service/${service._id}/book`}>Book Service</Link>
          </div>
        )}
      </div>
    );
  }
}

export default PackageSingleView;
