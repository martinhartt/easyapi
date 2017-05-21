import { postModel } from '../../utils/API';
import { showError } from '../other/showError';
import { receiveModel } from './receiveModel';


export function createModel() {
  return function (dispatch, getState) {
    const state = getState().toJS();
    const newId = state.serviceById[state.user.currentServiceId].Models &&
      (state.serviceById[state.user.currentServiceId].Models.length + 1);

    postModel({
      service: state.user.currentServiceId,
      name: `Model ${newId}`,
    })
    .then((result) => {
      if (result.success) {
        dispatch(receiveModel(result.model));
      } else {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
