import { getToken } from './Auth';
import store from '../index';
import { logoutUser } from '../actions/auth';

function curryReq(path, useToken = true, method = 'POST') {
  return async (params) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (useToken) {
      headers.Authorization = `bearer ${getToken()}`;
    }

    const response = await fetch(`/api${path}`, {
      method,
      headers,
      body: JSON.stringify(params),
    });

    if (response.status === 401) {
      store.dispatch(logoutUser());
    }

    return response.json();
  };
}

export const req = (path, params) => curryReq(path)(params);

export const extractModelFromText = text => curryReq('/service/parseText')({ text });

export const authenticateUser = (email, password) => curryReq('/auth/login', false)({ email, password });

export const getService = id => curryReq(`/service/${id}`, true, 'GET')({});

export const getServiceList = () => curryReq('/service', true, 'GET')();

export const postService = (name, models) => curryReq('/service', true, 'POST')({ name, models });
