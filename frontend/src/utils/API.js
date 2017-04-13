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

    const json = await response.json();
    console.log(`API response ${method} ${path}`, params, json);
    return json;
  };
}

export const req = (path, params) => curryReq(path)(params);

export const extractModelFromText = text => curryReq('/service/parseText')({ text });

export const authenticateUser = (username, password) => curryReq('/auth/login', false)({ username, password });

export const getService = id => curryReq(`/service/${id}`, true, 'GET')({});

export const getServiceList = () => curryReq('/service', true, 'GET')();

export const postService = (name, models) => curryReq('/service', true, 'POST')({ name, models });

export const postEntry = model => curryReq('/entry', true, 'POST')({ model });
export const deleteEntry = id => curryReq('/entry', true, 'DELETE')({ id });
export const updateValue = (entry, attribute, value) => curryReq('/value', true, 'PATCH')({ entry, attribute, value });
export const updateService = (id, changes) => curryReq(`/service/${id}`, true, 'PATCH')(changes);

export const postModel = curryReq('/model', true, 'POST');
export const deleteModel = curryReq('/model', true, 'DELETE');
export const patchModel = obj => curryReq(`/model/${obj.id}`, true, 'PATCH')(obj);

export const postAttribute = curryReq('/attribute', true, 'POST');
export const patchAttribute = obj => curryReq(`/attribute/${obj.id}`, true, 'PATCH')(obj);
export const deleteAttribute = curryReq('/attribute', true, 'DELETE');


export async function postAnalyzeSpreadsheet(file) {
  const formData = new FormData();
  formData.append('spreadsheet', file);

  const headers = {
  };

  headers.Authorization = `bearer ${getToken()}`;

  const response = await fetch('/api/service/parseSpreadsheet', {
    method: 'POST',
    headers,
    body: formData,
  });

  const json = await response.json();
  console.log('FILE API response', json);
  return json;
}
