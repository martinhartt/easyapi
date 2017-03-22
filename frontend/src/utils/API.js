import { isAuthenticated, getToken } from './Auth';
import store from '../index';
import { logoutUser } from '../actions/auth';

console.log('?', store);

function curryReq(path, useToken = true) {
  return async function(params) {
    let headers = {
      'Content-Type': 'application/json',
    };

    if (useToken) {
      headers.Authorization = `bearer ${getToken()}`;
    }

    const response = await fetch(`/api${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    if (response.status === 401) {
      store.dispatch(logoutUser());
    }

    return await response.json();
  }
}

export const req = (path, params) => curryReq(path)(params);

export const extractModelFromText = text => curryReq('/service/parseText')({ text });

export const authenticateUser = (email, password) => curryReq('/auth/login', false)({ email, password });
