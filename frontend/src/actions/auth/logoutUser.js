import { removeToken } from '../../utils/Auth';

export const LOGOUT_USER = 'LOGOUT_USER';

export function logoutUser() {
  removeToken();
  return {
    type: LOGOUT_USER,
  };
}
