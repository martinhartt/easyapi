import { push } from 'react-router-redux';
import { postAttribute } from '../../utils/API';
import { showError } from '../other/showError';
import { receiveAttribute } from './receiveAttribute';


export function createAttribute(model) {
  return function (dispatch, getState) {
    postAttribute({
      model,
      name: '',
      type: 'string',
      required: false,
      multiple: false,
    })
    .then((result) => {
      if (result.success) {
        dispatch(receiveAttribute(result.attribute));
      } else {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
