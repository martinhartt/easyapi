import { authUserResult } from './authUserResult';
import { getServiceList } from './getServiceList';
import { push } from 'react-router-redux';
import { authenticateUser } from '../../utils/API';
import { saveToken } from '../../utils/Auth';

export const AUTH_USER = 'AUTH_USER';

export function authUser(username, password) {
  return function (dispatch) {
    authenticateUser(username, password)
    .then(result => dispatch(authUserResult(result)))
    .then((result) => {
      if (result.success) {
        saveToken(result.token);
        dispatch(getServiceList(result));
      }
    })
    .catch(console.error);
  };
}
