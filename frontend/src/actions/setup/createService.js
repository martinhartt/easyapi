import { postService } from '../../utils/API';
import { nextScreen } from './nextScreen';
import { showError } from '../other/showError';

export const CREATE_SERVICE = 'CREATE_SERVICE';

export function createService() {
  return function (dispatch, getState) {
    const state = getState();

    const setup = state.get('setup');
    return postService(setup.get('name'), setup.get('naturalTextAnnotations'))
      .then(result => dispatch(result.success ?
         nextScreen() :
         console.log(result), // showError(result.error),
        ))
      .catch(e =>
      showError(e));
  };
}
