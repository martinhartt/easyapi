// @flow

export const SET_SERVICE_NAME = 'SET_SERVICE_NAME';

export function setServiceName(name: string) {
  return {
    type: SET_SERVICE_NAME,
    name,
  };
}
