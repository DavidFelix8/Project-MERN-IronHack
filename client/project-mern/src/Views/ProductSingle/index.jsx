import React, { Component } from 'react';
import './style.scss';

class PackageSingleView extends Component {
  constructor() {
    super();
    this.state = {
      package: null
    };
  }

  componentDidMount() {
    fetchData();
  }

  fetchData() {
    //const id = this.props.match.params.id;
    //create the data base first
  }

  render() {
    return <div></div>;
  }
}

export default PackageSingleView;
