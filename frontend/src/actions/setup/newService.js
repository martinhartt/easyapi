// @flow
import { browserHistory } from 'react-router';

export const NEW_SERVICE = 'NEW_SERVICE';

export function newService() {
  return (dispatch) => {
    browserHistory.push('/service/setup');
  };
}
