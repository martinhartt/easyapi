import { push } from 'react-router-redux';
import { changeSidebarItem } from './changeSidebarItem';

export const CHANGE_DASHBOARD_PAGE = 'CHANGE_DASHBOARD_PAGE';

export function changeDashboardPage(index, item) {
  return function (dispatch, getState) {
    dispatch(changeSidebarItem(index));
    dispatch(push(item.path));
  };
}
