import reducer from './index';
import { List, Map, fromJS } from 'immutable';
import * as types from '../actions/actionTypes';

const defaultState = fromJS({
  routing: {
    locationBeforeTransitions: null,
  },
  user: {
    currentServiceId: '1',
    username: '',
    password: '',
    authenticated: undefined,
    services: [],
    token: undefined,
  },
  dashboard: {
    items: [
      {
        name: 'Structure',
        path: '/service/dashboard/structure',
        selected: true,
      },
      {
        name: 'Entries',
        path: '/service/dashboard/entries',
      },
      {
        name: 'Pages',
        path: '/service/dashboard/pages',
      },
      {
        name: 'About',
        path: '/service/dashboard/about',
      },
    ],
    selectedAttribute: null,
    selectedModel: null,
  },
  setup: {
    name: '',
    screen: 'SERVICE_SETUP_SCREEN_NAME',
    method: 'CREATE_METHOD_NATURAL_LANGUAGE',
  },
  serviceById: {
  },
  modelById: {
  },
  attributeById: {
  },
  entryById: {},
  valueById: {},
  endpointById: {},
});

describe('easyAPI reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(defaultState);
  });
});
