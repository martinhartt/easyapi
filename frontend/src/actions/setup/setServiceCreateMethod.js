// @flow

export const SET_SERVICE_CREATE_METHOD = 'SET_SERVICE_CREATE_METHOD';

type methodString = 'strach' | 'spreadsheet' | 'device';

export function setServiceCreateMethod(method: methodString) {
  return {
    type: SET_SERVICE_CREATE_METHOD,
    method,
  };
}
