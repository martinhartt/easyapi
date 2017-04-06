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
import Entries from './components/dashboard/entries/Entries';
import Pages from './components/dashboard/pages/Pages';
import About from './components/dashboard/about/About';
import Publish from './components/dashboard/publish/Publish';
import ServiceListContainer from './containers/ServiceListContainer';
import HomePageContainer from './containers/HomePageContainer';

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

history.listen(console.log);

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
      />
      <Route
        path="/service/dashboard"
        component={Dashboard}
      >
        <Route
          path="structure"
          component={StructureContainer}
        />
        <Route
          path="entries"
          component={Entries}
        />
        <Route
          path="pages"
          component={Pages}
        />
        <Route
          path="about"
          component={About}
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
