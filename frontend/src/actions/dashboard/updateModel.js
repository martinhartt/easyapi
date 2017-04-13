import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { updateModelLocally } from './updateModelLocally';

export function updateModel(id, name) {
  return function (dispatch) {
    dispatch(updateModelLocally(id, name));
    API.patchModel({ id, name })
    .then((result) => {
      if (!result.success) {
        showError(result.error);
      }
    })
    .catch(e => showError(e));
  };
}
