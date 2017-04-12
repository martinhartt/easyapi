import { push } from 'react-router-redux';
import { postModel } from '../../utils/API';
import { showError } from '../other/showError';
import { receiveModel } from './receiveModel';


export function createModel() {
  return function (dispatch, getState) {
    const state = getState().toJS();

    postModel({
      service: state.user.currentServiceId,
      name: '',
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
