import { push } from 'react-router-redux';
import { postAttribute } from '../../utils/API';
import { showError } from '../other/showError';
import { receiveAttribute } from './receiveAttribute';
import { receiveEntry } from './receiveEntry';


export function createAttribute(model) {
  return function (dispatch, getState) {
    const state = getState().toJS();
    const newId = state.modelById[model].Attributes.length + 1;
    postAttribute({
      model,
      name: `attribute ${newId && `#${newId}`}`,
      type: 'string',
      required: false,
      multiple: false,
    })
    .then((result) => {
      if (result.success) {
        result.entries.map(e => dispatch(receiveEntry(e)));
        dispatch(receiveAttribute(result.attribute));
      } else {
        showError(result.error);
      }
    })
    .catch(e =>
    showError(e));
  };
}
