import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import easyAPI from './reducers';
import App from './components/App';
import './index.css';
import thunk from 'redux-thunk';

const store = createStore(easyAPI,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk),
);

const r = () => render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

r();
store.subscribe(r);
