import { receiveServiceList } from './receiveServiceList';
import * as API from '../../utils/API';

export function getServiceList() {
  return function (dispatch) {
    API.getServiceList()
    .then((result) => {
      dispatch(receiveServiceList(result));
    })
    .catch(console.log);
  };
}
