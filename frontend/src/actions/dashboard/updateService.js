import * as API from '../../utils/API';
import { showError } from '../other/showError';


export function updateService(changes) {
  return function (dispatch, getStore) {
    const id = getStore().toJS().user.currentServiceId;
    API.updateService(id, changes)
    .then((result) => {
      if (!result.success) {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
