import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { updateAttributeLocally } from './updateAttributeLocally';

export function updateAttribute(id, changes) {
  return function (dispatch) {
    dispatch(updateAttributeLocally(id, changes));
    API.patchAttribute({ id, ...changes })
    .then((result) => {
      if (!result.success) {
        showError(result.error);
      }
    })
    .catch(e => showError(e));
  };
}
