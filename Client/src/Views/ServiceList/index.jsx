import React, { Component, Fragment } from 'react';
import { list } from './../../services/service';
import { Link } from 'react-router-dom';

import './style.scss';

class ServiceListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      categories: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    // console.log('im running');
    this.fetchData();
  }

  async fetchData() {
    try {
      const services = await list();
      const categories = services
        .reduce((accumulator, service) => {
          const category = service.category;
          if (accumulator.includes(category)) {
            return accumulator;
          } else {
            return [...accumulator, category];
          }
        }, [])
        .map(category => {
          return {
            name: category,
            services: services.filter(service => service.category === category)
          };
        });
      this.setState({ categories });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const services = this.state.services;
    const categories = this.state.categories;
    return (
      <div>
        {/* <p>Here is our Service List</p> */}
        <ul>
          {categories.map(category => (
            <li key={category.name} className="ServiceList-li-Categories">
              <span>{category.name}</span>
              <ul className="ServiceList-ul-services">
                {category.services.map(service => (
                  <li className="ServiceList-li-Services" key={service._id}>
                    <Link to={`/service/${service._id}`}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ServiceListView;
