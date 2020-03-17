import React, { Component, Fragment } from 'react';
import { list } from './../../services/service';

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
    console.log('im running');
    this.fetchData();
  }

  async fetchData() {
    try {
      const services = await list();
      let categories = [];
      services.map(service =>
        categories.indexOf(service.category[0]) < 0 ? categories.push(service.category[0]) : ''
      );
      console.log(categories);
      this.setState({ services, categories });
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
          {categories.map(category => {
            return (
              <Fragment>
                <li key={category} className="ServiceList-li-Categories">
                  {category}
                </li>
                <ul className="ServiceList-ul-services">
                  {services
                    .filter(service => service.category[0] === category)
                    .map(serviceInCategory => (
                      <li className="ServiceList-li-Services" key={serviceInCategory._id}>
                        ➠{serviceInCategory.name}
                      </li>
                    ))}
                </ul>
              </Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ServiceListView;
