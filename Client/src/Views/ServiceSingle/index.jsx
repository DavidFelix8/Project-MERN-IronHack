import React, { Component } from 'react';
import './style.scss';
import { Card, Button } from 'react-bootstrap';

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
      <div className="card-container">
        {service && (
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={service.image} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button variant="secondary">
                <Link className="btn-title" to={`/service/${service._id}/book`} variant="primary">
                  <p>Book a Service</p>
                </Link>
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default PackageSingleView;
