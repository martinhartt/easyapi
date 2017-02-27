import { isAuthenticated, getToken } from './Auth';

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

    return await response.json();
  }
}

export const req = (path, params) => curryReq(path)(params);

export const createServiceFromScratch = text => curryReq('/service/scratch')({ text });

export const authenticateUser = (email, password) => curryReq('/auth/login', false)({ email, password });
