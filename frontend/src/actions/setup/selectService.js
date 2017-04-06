import { push } from 'react-router-redux';
export const SELECT_SERVICE = 'SELECT_SERVICE';


export function selectService(id) {
  return (dispatch) => {
    dispatch({
      type: SELECT_SERVICE,
      id,
    });
    dispatch(push('/service/dashboard'));
  };
}
