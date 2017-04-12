import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { deleteModelLocally } from './deleteModelLocally';


export function deleteModel(id) {
  return function (dispatch) {
    dispatch(deleteModelLocally(id));
    API.deleteModel({
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
