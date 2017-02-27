import { List, Map, fromJS } from 'immutable';

import {
  NEW_SERVICE,
} from '../actions/actionTypes';

const defaultUser = fromJS({
  currentServiceId: 'first',
  email: '',
  password: '',
  authenticated: false,
  services: [1],
});

function user(state = defaultUser, action) {
  switch (action.type) {
    case NEW_SERVICE: {
      return state
        .setIn(['user', 'currentServiceId'], action.id);
    }
  }
}
