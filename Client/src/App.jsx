import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

import AuthenticationSignUpView from './Views/Authentication/SignUp';
import AuthenticationSignInView from './Views/Authentication/SignIn';
import AboutUs from './Views/AboutUs';

class App extends Component {
  constructor() {
    super();
    /* this.state = {
      user: null
    }; */
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <AboutUs />
          <Switch>
            <Route path="/sign-up" redirect={'/'}>
              {' '}
              <AuthenticationSignUpView />{' '}
            </Route>
            <Route path="/sign-in" redirect={'/'}>
              {' '}
              <AuthenticationSignInView />{' '}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
