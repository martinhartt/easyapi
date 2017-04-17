import { push } from 'react-router-redux';
import { changeSidebarItem } from './changeSidebarItem';
import * as API from '../../utils/API';
import { showError } from '../other/showError';
import { deleteEntryLocally } from './deleteEntryLocally';


export function deleteEntry(id) {
  return function (dispatch, getState) {
    const entry = getState().get('entryById').toJS()[id];
    API.deleteEntry(id)
    .then((result) => {
      if (result.success) {
        dispatch(deleteEntryLocally(entry));
      } else {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
