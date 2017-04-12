// @flow
import { List, Map, fromJS } from 'immutable';
import {
  UPDATE_MODEL_PREVIEW,
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
  RECEIVE_SERVICE,
  CHANGE_SELECTED_MODEL,
  RECEIVE_ENTRY,
  DELETE_ENTRY_LOCALLY,
  UPDATE_VALUE_LOCALLY,
  UPDATE_SERVICE_LOCALLY,
  SELECT_ATTRIBUTE,
  RECEIVE_MODEL
} from '../actions/actionTypes';
import capitalizeString from '../utils/capitalizeString';
import formatSentences from '../utils/formatSentences';
import createMethods from '../utils/createMethods';
import { isAuthenticated, getToken } from '../utils/Auth';
import { normalizeServices, normalizeService, normalizeEntry, normalizeModel } from '../utils/normalizr';
import {
  LOCATION_CHANGE
} from 'react-router-redux';
import {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
  SERVICE_SETUP_SCREEN_SPREADSHEET,
  SERVICE_SETUP_SCREEN_DEVICE,
} from '../utils/setupScreens';


const {
  naturalLanguage,
  spreadsheet,
  device,
} = createMethods;


const NEW_ID = '-1';


const defaultState = fromJS({
  routing: {
    locationBeforeTransitions: null,
  },
  user: {
    currentServiceId: '1',
    username: '',
    password: '',
    authenticated: isAuthenticated(),
    services: ['1'],
    token: getToken(),
  },
  dashboard: {
    items: [
      {
        name: 'Structure',
        path: '/service/dashboard/structure', selected: true
      },
      {
        name: 'Entries',
        path: '/service/dashboard/entries'
      },
      {
        name: 'Pages',
        path: '/service/dashboard/pages'
      },
      {
        name: 'About',
        path: '/service/dashboard/about'
      },
    ],
    selectedAttribute: null,
    selectedModel: null,
  },
  setup: {
    name: '',
    screen: SERVICE_SETUP_SCREEN_NAME,
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
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_SPREADSHEET);
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
    case UPDATE_MODEL_PREVIEW: {
      return state
        .setIn(['setup', 'modelDefinitionPreview'], action.annotations);
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
      const { username, password } = action;

      if (username && password) {
        return state
          .setIn(['user', 'username'], username)
          .setIn(['user', 'password'], password);
      } else if (username) {
        return state
          .setIn(['user', 'username'], username);
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
      // console.log('CHANGE_SIDEBAR_ITEM', state.getIn(['dashboard', 'items']).map((item, i) => item.set('selected', i === action.index)).toJS());
      return state
        .setIn(
          ['dashboard', 'items'],
          state.getIn(['dashboard', 'items']).map((item, i) => item.set('selected', i === action.index))
      )
    }
    case RECEIVE_SERVICE_LIST: {
      let services = action.services;

      const entities = normalizeServices({ services }).entities;

      const serviceIds = entities.services.undefined.services;

      const serviceById = entities.service || {};
      const modelById = entities.model || {};
      const attributeById = entities.attribute || {};
      const entryById = entities.entry || {};
      const valueById = entities.value || {};

      return state
        .setIn(['user', 'services'], fromJS(serviceIds))
        .set('serviceById', fromJS(serviceById).merge(state.get('serviceById')))
        .set('modelById', fromJS(modelById).merge(state.get('modelById')))
        .set('attributeById', fromJS(attributeById).merge(state.get('attributeById')))
        .set('entryById', fromJS(entryById).merge(state.get('entryById')))
        .set('valueById', fromJS(valueById).merge(state.get('valueById')));
    }
    case RECEIVE_SERVICE: {
      // TODO
      console.log(JSON.stringify(action.service));

      const entities = normalizeService(action.service).entities;

      console.log(entities);
      const serviceById = entities.service || {};
      const modelById = entities.model || {};
      const attributeById = entities.attribute || {};
      const entryById = entities.entry || {};
      const valueById = entities.value || {};

      return state
        .setIn(['user', 'currentServiceId'], action.service.id)
        .set('serviceById', fromJS(serviceById).merge(state.get('serviceById')))
        .set('modelById', fromJS(modelById).merge(state.get('modelById')))
        .set('attributeById', fromJS(attributeById).merge(state.get('attributeById')))
        .set('entryById', fromJS(entryById).merge(state.get('entryById')))
        .set('valueById', fromJS(valueById).merge(state.get('valueById')));
    }
    case RECEIVE_ENTRY: {
      const entities = normalizeEntry(action.entry).entities;

      const model = action.entry.ModelId;

      const valueById = entities.value || {};
      const entryById = entities.entry || {};

      const entryIdsPath = ['modelById', `${model}`, 'Entries'];

      return state
        .setIn(entryIdsPath, state.getIn(entryIdsPath).push(action.entry.id))
        .set('entryById', fromJS(entryById).merge(state.get('entryById')))
        .set('valueById', fromJS(valueById).merge(state.get('valueById')));
    }
    case RECEIVE_MODEL: {
      const entities = normalizeModel(action.model).entities;

      const modelById = entities.model || {};

      const modelIdsPath = ['serviceById', `${state.getIn(['user','currentServiceId'])}`, 'Models'];

      return state
        .setIn(modelIdsPath, state.getIn(modelIdsPath).push(action.model.id))
        .set('modelById', fromJS(modelById).merge(state.get('modelById')));
    }
    case SELECT_SERVICE: {
      return state.setIn(
        [
          'user', 'currentServiceId'
        ],
        action.id,
      )
    }
    case CHANGE_SELECTED_MODEL: {
      return state.setIn(
        [
          'dashboard', 'selectedModel'
        ],
        action.id
      )
    }
    case DELETE_ENTRY_LOCALLY: {
      const entries = ['modelById', `${action.entry.ModelId}`, 'Entries'];
      return state
        .deleteIn(['entryById', `${action.entry.id}`])
        .setIn(entries, state.getIn(entries).filter(i => i !== action.entry.id));
    }
    case UPDATE_VALUE_LOCALLY: {
      const valueIdsPath = ['valueById', `${action.value}`, 'Entries'];

      return state
        .setIn(['valueById', `${action.id}`, 'value'], action.value);
    }
    case UPDATE_SERVICE_LOCALLY: {
      const servicePath = ['serviceById', `${state.getIn(['user', 'currentServiceId'])}`];

      return state
        .setIn(servicePath, state.getIn(servicePath).merge(fromJS(action.changes)));
    }
    case SELECT_ATTRIBUTE: {
      return state
        .setIn(['dashboard', 'selectedAttribute'], action.id);
    }
    default:
      return state;
  }
}

export default easyAPI;
