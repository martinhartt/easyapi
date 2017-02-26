export const SELECT_SERVICE = 'SELECT_SERVICE';

export function selectService(id) {
  return {
    type: SELECT_SERVICE,
    id,
  };
}
