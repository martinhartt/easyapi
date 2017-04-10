import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, IndexRedirect, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import easyAPI from './reducers';
import './index.css';
import Service from './components/Service';
import Dashboard from './components/dashboard/Dashboard';
import StructureContainer from './containers/dashboard/StructureContainer';
import EntriesContainer from './containers/dashboard/EntriesContainer';
import AboutContainer from './containers/dashboard/AboutContainer';
import PagesContainer from './containers/dashboard/PagesContainer';
import Publish from './components/dashboard/publish/Publish';
import ServiceListContainer from './containers/ServiceListContainer';
import HomePageContainer from './containers/HomePageContainer';
import { isAuthenticated } from './utils/Auth';

const middleware = routerMiddleware(browserHistory);
const store = createStore(easyAPI,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk, middleware),
);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});

function requireAuth(nextState, replace) {
  if (!isAuthenticated()) {
    replace({
      pathname: '/',
    });
  }
}

const r = () => render(
  <Provider store={store}>
    <Router history={history}>
      <Route
        path="/"
        component={HomePageContainer}
      />
      <Route
        path="/services"
        component={ServiceListContainer}
      />
      <Route
        path="/service/setup"
        component={Service}
        onEnter={requireAuth}
      />
      <Route
        path="/service/dashboard"
        component={Dashboard}
        onEnter={requireAuth}
      >
        <Route
          path="structure"
          component={StructureContainer}
        />
        <Route
          path="entries"
          component={EntriesContainer}
        />
        <Route
          path="pages"
          component={PagesContainer}
        />
        <Route
          path="about"
          component={AboutContainer}
        />
        <Route
          path="publish"
          component={Publish}
        />
        <IndexRedirect to="structure" />
      </Route>

    </Router>
  </Provider>,
  document.getElementById('root'),
);

r();
store.subscribe(r);
