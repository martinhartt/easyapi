import { push } from 'react-router-redux';
import { postService } from '../../utils/API';
import { showError } from '../other/showError';
import { receiveService } from './receiveService';

export const CREATE_SERVICE = 'CREATE_SERVICE';

export function createService() {
  return function (dispatch, getState) {
    const state = getState();

    const setup = state.get('setup');
    return postService(setup.get('name'), setup.get('modelDefinitionPreview'))
      .then((result) => {
        if (result.success) {
          dispatch(receiveService(result.service));
          dispatch(push('/service/dashboard'));
        } else {
          dispatch(showError(result.error));
        }
      })
      .catch(e =>
      showError(e));
  };
}
