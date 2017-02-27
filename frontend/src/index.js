import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import easyAPI from './reducers';
import App from './components/App';
import './index.css';
import Service from './components/Service';
import ServiceListContainer from './containers/ServiceListContainer';
import HomePage from './components/HomePage';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import { combineReducers } from 'redux-immutable';

const middleware = routerMiddleware(browserHistory);
const store = createStore(easyAPI,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk, middleware),
);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
      console.log('OK', state.get('routing'));
      return state.get('routing').toJS();
  }
});

const r = () => render(
  <Provider store={store}>
    <Router history={history}>
      <Route
        path="/"
        component={HomePage}
      />
      <Route
        path="/services"
        component={ServiceListContainer}
      />
      <Route
        path="/service/setup"
        component={Service}
      />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

r();
store.subscribe(r);
