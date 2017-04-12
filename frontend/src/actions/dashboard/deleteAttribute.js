import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { deleteAttributeLocally } from './deleteAttributeLocally';


export function deleteAttribute(id) {
  return function (dispatch) {
    dispatch(deleteAttributeLocally(id));
    API.deleteAttribute({
      id,
    })
    .then((result) => {
      if (!result.success) {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
