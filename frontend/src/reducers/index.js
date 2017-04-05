// @flow
import { List, Map, fromJS } from 'immutable';
import {
  ANNOTATE_NATURAL_TEXT,
  NEW_SERVICE,
  RECEIVE_WEBHOOK_URL,
  SELECT_DEVICE,
  SET_DEVICE_FLOW_DIRECTION,
  SET_SERVICE_CREATE_METHOD,
  SET_SERVICE_NAME,
  SETUP_DEVICE_QUERY,
  NEXT_SCREEN,
  UPDATE_NATURAL_TEXT,
  UPDATE_USER,
  AUTH_USER_RESULT,
  LOGOUT_USER,
  CHANGE_SIDEBAR_ITEM,
  RECEIVE_SERVICE_LIST,
  SELECT_SERVICE,
} from '../actions/actionTypes';
import capitalizeString from '../utils/capitalizeString';
import formatSentences from '../utils/formatSentences';
import setupScreens from '../utils/setupScreens';
import createMethods from '../utils/createMethods';
import { isAuthenticated, getToken } from '../utils/Auth';
import { normalizeServices } from '../utils/normalizr';
import {
  LOCATION_CHANGE
} from 'react-router-redux';

const {
  naturalLanguage,
  spreadsheet,
  device,
} = createMethods;

const {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
} = setupScreens;

const NEW_ID = '-1';


const defaultState = fromJS({
  routing: {
    locationBeforeTransitions: null,
  },
  user: {
    currentServiceId: '1',
    email: '',
    password: '',
    authenticated: isAuthenticated(),
    services: ['1'],
    token: getToken(),
  },
  structure: {
    items: [
      {
        name: 'Structure',
        path: '/service/X/structure', selected: true
      },
      {
        name: 'Entries',
        path: '/service/X/entries'
      },
      {
        name: 'Pages',
        path: '/service/X/pages'
      },
      {
        name: 'About',
        path: '/service/X/about'
      },
    ],
    selectedAttribute: {

    }
  },
  setup: {
    name: '',
    screen: SERVICE_SETUP_SCREEN_NAME,
    method: 'CREATE_METHOD_NATURAL_LANGUAGE',
  },
  serviceById: {
    '1': {
      name: 'Cats',
      models: ['4','3']
    }
  },
  modelById: {
    '4': {
      name: 'Pet',
      attributes: ['1','2'],
    },
    '3': {
      name: 'Toy',
      attributes: ['2'],
    }
  },
  attributeById: {
    '1': {
      name: 'name',
      type: 'string',
    },
    '2': {
      name: 'age',
      type: 'integer',
    }
  },
  entryById: {},
  valueById: {},
  endpointById: {},
});

function easyAPI(state: any = defaultState, action: {type: string}) {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return state.setIn(['routing','locationBeforeTransitions'], action.payload);
    }
    case NEW_SERVICE: {
      return state
        .setIn(['user', 'currentServiceId'], NEW_ID)
        .setIn(['serviceById', NEW_ID], Map({
          id: NEW_ID,
          name: null,
          author: state.getIn(['user', 'name']),
          models: List(),
          endpoints: List(),
        }));
    }
    case NEXT_SCREEN: {
      switch (state.getIn(['setup', 'screen'])) {
        case SERVICE_SETUP_SCREEN_NAME:
          return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_METHOD);
          break;
        case SERVICE_SETUP_SCREEN_METHOD:
          const method = state.getIn(['setup', 'method']);
          switch (method) {
            case naturalLanguage:
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_NATURAL);
              break;
            case spreadsheet:
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_NAME);
              break;
            case device:
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_NAME);
              break;
            default:
              return state;
          }
          break;
      }

      return state;
    }
    case SET_SERVICE_NAME: {
      console.log('capitalizeString', capitalizeString('ok'));
      return state
        .setIn([
          'setup',
          'name',
        ], capitalizeString(action.name));
    }
    case SET_SERVICE_CREATE_METHOD: {
      const newState = state
        .setIn([
          'setup',
          'method',
        ], action.method);
      switch (action.method) {
        case naturalLanguage: {
          return newState
            .setIn(['setup', 'naturalText'], '');
        }
        case spreadsheet: {
          return newState
            .setIn(['setup', 'spreadsheet'], '');
        }
        case device: {
          return newState
            .setIn(['setup', 'device'], Map({
              selectedDevice: '',
              flowDirection: null,
            }));
        }
        default: {
          return newState;
        }
      }
    }
    case UPDATE_NATURAL_TEXT: {
      return state.setIn(['setup', 'naturalText'], formatSentences(action.text));
    }
    case ANNOTATE_NATURAL_TEXT: {
      return state
        .setIn(['setup', 'naturalTextAnnotations'], action.annotations);
    }
    case SELECT_DEVICE: {
      return state
        .setIn(['setup', 'selectedDevice'], state.device);
    }
    case SET_DEVICE_FLOW_DIRECTION: {
      return state
        .setIn(['setup', 'flowDirection'], state.direction);
    }
    case RECEIVE_WEBHOOK_URL: {
      return state
        .setIn(['setup', 'webhookURL'], state.url);
    }
    case SETUP_DEVICE_QUERY: {
      return state
        .setIn(['setup', 'query'], Map({
          url: action.url,
          method: action.method,
          attributes: action.attributes,
          interval: action.interval,
        }));
    }
    case UPDATE_USER: {
      const { email, password } = action;

      if (email && password) {
        return state
          .setIn(['user', 'email'], email)
          .setIn(['user', 'password'], password);
      } else if (email) {
        return state
          .setIn(['user', 'email'], email);
      } else {
        return state
          .setIn(['user', 'password'], password);
      }
    }
    case AUTH_USER_RESULT: {
      return state
        .setIn(['user', 'authenticated'], action.success)
        .setIn(['user', 'errors'], action.errors)
        .setIn(['user', 'token'], action.token);
    }
    case LOGOUT_USER: {
      return state
        .setIn(['user', 'authenticated'], false)
        .setIn(['user', 'errors'], null)
        .setIn(['user', 'token'], null);
    }
    case CHANGE_SIDEBAR_ITEM: {
      console.log('CHANGE_SIDEBAR_ITEM', state.getIn(['dashboard', 'items']).map((item, i) => item.set('selected', i === action.index)).toJS());
      return state
        .setIn(
          ['dashboard', 'items'],
          state.getIn(['dashboard', 'items']).map((item, i) => item.set('selected', i === action.index))
      )
    }
    case RECEIVE_SERVICE_LIST: {
      const services = action.services;

      const normalized = normalizeServices({ services }).entities;

      const serviceIds = normalized.services.undefined.services;

      const serviceById = normalized.service;
      const modelById = normalized.model;

      return state
        .setIn(['user', 'services'], fromJS(serviceIds))
        .set('serviceById', fromJS(serviceById))
        .set('modelById', fromJS(modelById));
    }
    case SELECT_SERVICE: {
      return state.setIn(
        [
          'user', 'currentServiceId'
        ],
        action.id,
      )
    }
    default:
      return state;
  }
}

export default easyAPI;
