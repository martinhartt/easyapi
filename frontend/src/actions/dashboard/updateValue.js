import * as API from '../../utils/API';
import { showError } from '../other/showError';


export function updateValue(entryId, attributeId, value) {
  return function (dispatch) {
    API.updateValue(entryId, attributeId, value)
    .then((result) => {
      if (!result.success) {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
