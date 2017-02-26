export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(email, password) {
  return {
    type: UPDATE_USER,
    email,
    password,
  };
}
