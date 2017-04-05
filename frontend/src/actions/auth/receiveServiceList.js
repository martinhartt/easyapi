export const RECEIVE_SERVICE_LIST = 'RECEIVE_SERVICE_LIST';

export function receiveServiceList(data) {
  return {
    type: RECEIVE_SERVICE_LIST,
    services: data.services,
  };
}
