const localStorage = window.localStorage || null;


export function saveToken(token) {
  if (!localStorage) return;
  localStorage.setItem('token', token);
}
export function isAuthenticated() {
  if (!localStorage) return;
  return localStorage.getItem('token') != null;
}
export function removeToken() {
  if (!localStorage) return;
  localStorage.removeItem('token');
}
export function getToken() {
  if (!localStorage) return;
  return localStorage.getItem('token');
}
