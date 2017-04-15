// @flow

export const SET_SERVICE_NAME = 'SET_SERVICE_NAME';

export function setServiceName(name) {
  return {
    type: SET_SERVICE_NAME,
    name,
  };
}
