import { push } from 'react-router-redux';
import { changeSidebarItem } from './changeSidebarItem';
import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { receiveEntry } from './receiveEntry';


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
