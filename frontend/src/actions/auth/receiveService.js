export const RECEIVE_SERVICE = 'RECEIVE_SERVICE';

export default function receiveService(data) {
  return {
    type: RECEIVE_SERVICE,
    data,
  };
}
