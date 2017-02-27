
export function saveToken(token) {
    localStorage.setItem('token', token);
}
export function isAuthenticated() {
  return localStorage.getItem('token') != null;
}
export function removeToken() {
  localStorage.removeItem('token');
}
export function getToken() {
  return localStorage.getItem('token');
}
