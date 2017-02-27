import { authUserResult } from './authUserResult';
import { nextScreen } from '../setup/nextScreen';
import { push } from 'react-router-redux';
export const AUTH_USER = 'AUTH_USER';

export function authUser(email, password) {
  console.log('<<', email, password)
  return function (dispatch) {
    return fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then(res => res.json())
    .then(result => dispatch(authUserResult(result)))
    .then((result) => {
      result.success && dispatch(push('/services'))
    })
    .catch(console.log);
  }
}
