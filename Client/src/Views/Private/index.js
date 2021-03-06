import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import Moment from 'react-moment';

// import { list } from './../../services/service';
import { find } from './../../services/subscription';

class PrivateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: null
    };
    // console.log(this.props);
    this.getSubscription = this.getSubscription.bind(this);
  }

  componentDidMount() {
    this.getSubscription();
  }

  async getSubscription() {
    // console.log('getting subscription', this.props.user.subscription);
    try {
      const sub = await find(this.props.user.subscription);
      // console.log('sub', sub.sub);
      this.setState({
        subscription: sub.sub
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const date = new Date();
    const user = this.props.user;
    const service = this.props.service;
    // console.log('subscrition state', this.state.subscription);
    // console.log(user);
    //User Undefined
    return (
      <div>
        {/* {<pre>{JSON.stringify(this.props, null, 2)}</pre>} */}
        <section id="d-flex flex-column">
          <Container className="MyAccount-Container">
            <Row className="MyAccount-Subs">
              <Col className="MyAccount-Text">Account Type:</Col>
              <Col className="MyAccount-TextShow">
                {this.state.subscription ? <h4>{this.state.subscription.title}</h4> : 'None'}
              </Col>
            </Row>
            <Row className="MyAccount-Subs">
              <Col className="MyAccount-Text">Your subscription ends at:</Col>
              <Col className="MyAccount-TextShow">
                <div>
                  {this.state.subscription ? (
                    <Moment format="DD/MM/YYYY" add={{ days: 30, hours: 0 }}>
                      {date}
                    </Moment>
                  ) : (
                    'None'
                  )}
                </div>
              </Col>
            </Row>
            <Row className="MyAccount-Subs">
              <Col className="MyAccount-Text">Username:</Col>
              <Col className="MyAccount-TextShow">{user.name}</Col>
            </Row>
            <Row className="MyAccount-Subs">
              <Col className="MyAccount-Text">Email:</Col>
              <Col className="MyAccount-TextShow">{user.email}</Col>
            </Row>
            <Row className="MyAccount-Subs">
              <Col className="MyAccount-Text">Your Subscription Includes:</Col>
              <Col className="MyAccount-TextShowIncludes">
                {' '}
                <ul>
                  {this.state.subscription ? (
                    <li>{this.state.subscription.categories}</li>
                  ) : (
                    'You need to purchase a subscription first'
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="MyAccount-links">
            <Link to="/payment-method/list">View Payment Methods</Link>
            <Link to="/my-account/edit">Edit Profile</Link>
            <Link to="/booking/list">See my List of Bookings</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default PrivateView;
