// let savedToken;

const localStorage = window.localStorage || null;


export function saveToken(token) {
  // savedToken = token;
  if (!localStorage) return;
  localStorage.setItem('token', token);
}
export function isAuthenticated() {
  // return savedToken != null;
  if (!localStorage) return;
  return localStorage.getItem('token') != null;
}
export function removeToken() {
  // savedToken = undefined;
  if (!localStorage) return;
  localStorage.removeItem('token');
}
export function getToken() {
  // return savedToken;
  if (!localStorage) return;
  return localStorage.getItem('token');
}
