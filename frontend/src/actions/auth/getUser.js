import { updateUser } from './updateUser';
import { showError } from '../other/showError';
import * as API from '../../utils/API';

export function getUser() {
  return function (dispatch) {
    API.getUserInfo()
    .then((result) => {
      dispatch(updateUser(result.username, ''));
    })
    .catch(e => dispatch(showError(e.message)));
  };
}
