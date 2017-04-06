export const SHOW_ERROR = 'SHOW_ERROR';

export function showError(message) {
  console.error(message);
  return {
    type: SHOW_ERROR,
    message,
  };
}
