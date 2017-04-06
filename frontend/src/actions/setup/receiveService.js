// @flow

export const RECEIVE_SERVICE = 'RECEIVE_SERVICE';

export function receiveService(service) {
  return {
    type: RECEIVE_SERVICE,
    service,
  };
}
