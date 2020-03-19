import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

import PrivateView from './Views/Private';
import PrivateEditView from './Views/PrivateEdit';
import AuthenticationSignUpView from './Views/Authentication/SignUp';
import AuthenticationSignInView from './Views/Authentication/SignIn';
import HomeComponent from './components/Home';
import SubscriptionListView from './Views/SubscriptionList';
import ServiceListView from './Views/ServiceList';
import ContactsView from './Views/Contacts';
import CancelSubscriptionView from './Views/CancelSubscription';
import ErrorView from './Views/Error';

import { loadUserInformation } from './services/authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  componentDidMount() {
    loadUserInformation()
      .then(user => {
        this.updateUserInformation(user);
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateUserInformation(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        {(this.state.loaded && (
          <BrowserRouter>
            <NavBar user={this.state.user} updateUserInformation={this.updateUserInformation} />
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              {/* THIS ROUTE WAS THE PROBLEM, IT WAS RENDERING BEFORE GETTING TO THE ROUTER WITH THE PROPS */}
              {/* {<Route path="/my-account" exact component={PrivateView} />} */}
              <Route path="/cancel-subscription" exact component={CancelSubscriptionView} />
              <Route path="/services" exact component={ServiceListView} />
              <Route path="/contact" exact component={ContactsView} />
              <Route path="/subscriptions" exact component={SubscriptionListView} />
              <ProtectedRoute
                path="/sign-up"
                authorized={!this.state.user}
                redirect={'/'}
                render={props => (
                  <AuthenticationSignUpView
                    {...props}
                    updateUserInformation={this.updateUserInformation}
                  />
                )}
              />
              <ProtectedRoute
                path="/sign-in"
                authorized={!this.state.user}
                redirect={'/'}
                render={props => (
                  <AuthenticationSignInView
                    {...props}
                    updateUserInformation={this.updateUserInformation}
                  />
                )}
              />
              <ProtectedRoute
                authorized={this.state.user}
                redirect="/sign-in"
                path="/my-account/edit"
                render={props => (
                  <PrivateEditView
                    updateUserInformation={this.updateUserInformation}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <ProtectedRoute
                authorized={this.state.user}
                redirect="/sign-in"
                path="/my-account"
                render={props => <PrivateView user={this.state.user} {...props} />}
              />

              <Route path="/error" component={ErrorView} />
              <Redirect to="/error" />
            </Switch>
          </BrowserRouter>
        )) || (
          <div className="loading">
            <span className="loading-text">Loading...</span>
            <img className="loading-img" src="./images/loading.svg" alt="Loading" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
