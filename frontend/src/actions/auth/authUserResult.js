export const AUTH_USER_RESULT = 'AUTH_USER_RESULT';

export function authUserResult(result) {
  return {
    type: AUTH_USER_RESULT,
    success: result.success,
    errors: result.errors,
    token: result.token,
  };
}
