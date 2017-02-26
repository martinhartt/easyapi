import React from 'react';
import Service from './Service';
import ServiceListContainer from '../containers/ServiceListContainer';
import HomePage from './HomePage';
import { Router, Route, browserHistory } from 'react-router';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={HomePage}
      />
      <Route
        path="/services"
        component={ServiceListContainer}
      />
      <Route
        path="/(:service)(/:page)"
        component={Service}
      />
    </Router>
  );
}

export default App;
