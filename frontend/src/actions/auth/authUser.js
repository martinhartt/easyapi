import { authUserResult } from './authUserResult';
import { nextScreen } from '../setup/nextScreen';
import { push } from 'react-router-redux';
import { authenticateUser } from '../../utils/API';
import { saveToken } from '../../utils/Auth';
export const AUTH_USER = 'AUTH_USER';

export function authUser(email, password) {
  return function (dispatch) {
    // return fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
    // .then(res => res.json())
    authenticateUser(email, password)
    .then(result => dispatch(authUserResult(result)))
    .then((result) => {
      if (result.success) {
        saveToken(result.token);
      }
    })
    .catch(console.log);
  }
}
