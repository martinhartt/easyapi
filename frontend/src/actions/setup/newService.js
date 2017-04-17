import { push } from 'react-router-redux';

export const NEW_SERVICE = 'NEW_SERVICE';

export function newService() {
  return (dispatch) => {
    dispatch(push('/service/setup'));
  };
}
