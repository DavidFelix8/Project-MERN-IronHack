import React, { Component } from 'react';
import ProductItem from './../../components/ProductItem';
import './style.scss';

class PackageListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: []
    };
  }

  componentDidMount() {}

  fetchData() {}

  render() {
    return <div></div>;
  }
}

export default PackageListView;
