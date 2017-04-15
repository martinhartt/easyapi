import { receiveServiceList } from './receiveServiceList';
import { showError } from '../other/showError';
import * as API from '../../utils/API';

export function getServiceList() {
  return function (dispatch) {
    API.getServiceList()
    .then((result) => {
      dispatch(receiveServiceList(result));
    })
    .catch(e => dispatch(showError(e.message)));
  };
}
