import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

import AuthenticationSignUpView from './Views/Authentication/SignUp';
import AuthenticationSignInView from './Views/Authentication/SignIn';
import HomeComponent from './components/Home';
import SubscriptionListView from './Views/SubscriptionList';
import ServiceListView from './Views/ServiceList';
import MyAccountView from './Views/MyAccount';
import ContactsView from './Views/Contacts';
import CancelSubscriptionView from './Views/CancelSubscription';
// import ErrorView from './Views/Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/my-account" exact component={MyAccountView} />
            <Route path="/cancel-subscription" exact component={CancelSubscriptionView} />
            <Route path="/services" exact component={ServiceListView} />
            <Route path="/contact" exact component={ContactsView} />
            <Route path="/subscriptions" exact component={SubscriptionListView} />
            <ProtectedRoute
              path="/sign-up"
              authorized={!this.state.user}
              redirect={'/'}
              render={props => <AuthenticationSignUpView {...props} />}
            />
            <ProtectedRoute
              path="/sign-in"
              authorized={!this.state.user}
              redirect={'/'}
              render={props => <AuthenticationSignInView {...props} />}
            />
            {/*  <Route path="/error" component={ErrorView} />
            <Redirect to="/error" /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
