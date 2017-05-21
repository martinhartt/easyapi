

export const SET_SERVICE_CREATE_METHOD = 'SET_SERVICE_CREATE_METHOD';

export function setServiceCreateMethod(method) {
  return {
    type: SET_SERVICE_CREATE_METHOD,
    method,
  };
}
