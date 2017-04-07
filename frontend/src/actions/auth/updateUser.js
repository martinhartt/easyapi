export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(username, password) {
  return {
    type: UPDATE_USER,
    username,
    password,
  };
}
