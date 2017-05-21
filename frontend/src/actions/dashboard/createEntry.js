import { postEntry } from '../../utils/API';
import { showError } from '../other/showError';
import { receiveEntry } from './receiveEntry';


export function createEntry(index, item) {
  return function (dispatch, getState) {
    const state = getState().toJS();

    const model = state.dashboard.selectedModel ||
     state.serviceById[state.user.currentServiceId].Models[0];
    postEntry(model)
    .then((result) => {
      if (result.success) {
        dispatch(receiveEntry(result.entry));
      } else {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
