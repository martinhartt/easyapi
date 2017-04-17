import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { updateModelLocally } from './updateModelLocally';

export function updateModel(id, changes) {
  return function (dispatch) {
    dispatch(updateModelLocally(id, changes));
    API.patchModel(id, changes)
    .then((result) => {
      if (!result.success) {
        showError(result.error);
      }
    })
    .catch(e => showError(e));
  };
}
