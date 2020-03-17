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
import MyAccountView from './Views/MyAccount';
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
        {/*    {<BrowserRouter>
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
             <Route path="/error" component={ErrorView} />
            <Redirect to="/error" />
          </Switch>
        </BrowserRouter>} */}
        {(this.state.loaded && (
          <BrowserRouter>
            <NavBar user={this.state.user} updateUserInformation={this.updateUserInformation} />
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/my-account" exact component={MyAccountView} />
              <Route path="/cancel-subscription" exact component={CancelSubscriptionView} />
              <Route path="/services" exact component={ServiceListView} />
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
                path="/private/edit"
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
                path="/private"
                render={props => <PrivateView user={this.state.user} {...props} />}
              />
              <Route path="/error" component={ErrorView} />
              <Redirect to="/error" />
            </Switch>
          </BrowserRouter>
        )) || <span>Loading...</span>}
      </div>
    );
  }
}

export default App;
