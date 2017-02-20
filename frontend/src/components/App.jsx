import React from 'react';
import Service from './Service';
import { Router, Route, browserHistory } from 'react-router';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/(:service)(/:page)"
        component={Service}
      />
    </Router>
  );
}

export default App;
