let savedToken;

export function saveToken(token) {
  savedToken = token;
  // localStorage.setItem('token', token);
}
export function isAuthenticated() {
  return savedToken != null;
  // return localStorage.getItem('token') != null;
}
export function removeToken() {
  savedToken = undefined;
  // localStorage.removeItem('token');
}
export function getToken() {
  return savedToken;
  // return localStorage.getItem('token');
}
