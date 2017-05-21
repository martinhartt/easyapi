import { authUserResult } from './authUserResult';
import { authenticateUser } from '../../utils/API';
import { saveToken } from '../../utils/Auth';
import { showError } from '../other/showError';

export function authUser(username, password) {
  return function (dispatch) {
    authenticateUser(username, password)
    .then((result) => {
      dispatch(authUserResult(result));
      if (result.success) {
        saveToken(result.token);
      }
    })
    .catch(e => showError(e.message));
  };
}
