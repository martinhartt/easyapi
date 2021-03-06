
import { List, Map, fromJS } from 'immutable';
import {
  LOCATION_CHANGE,
} from 'react-router-redux';
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
  RECEIVE_MODEL,
  RECEIVE_ATTRIBUTE,
  DELETE_MODEL_LOCALLY,
  DELETE_ATTRIBUTE_LOCALLY,
  UPDATE_ATTRIBUTE_LOCALLY,
  UPDATE_MODEL_LOCALLY,
} from '../actions/actionTypes';
import capitalizeString from '../utils/capitalizeString';
import createMethods from '../utils/createMethods';
import { isAuthenticated, getToken } from '../utils/Auth';
import { normalizeServices, normalizeService, normalizeEntry, normalizeModel, normalizeAttribute } from '../utils/normalizr';
import {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
  SERVICE_SETUP_SCREEN_SPREADSHEET,
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
    currentServiceId: null,
    username: '',
    password: '',
    authenticated: isAuthenticated(),
    services: [],
    token: getToken(),
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

function easyAPI(state = defaultState, action) {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return state.setIn(['routing', 'locationBeforeTransitions'], action.payload);
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
        case SERVICE_SETUP_SCREEN_METHOD:
          const method = state.getIn(['setup', 'method']);
          switch (method) {
            case naturalLanguage:
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_NATURAL);
            case spreadsheet:
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_SPREADSHEET);
            case device:
              return state.setIn(['setup', 'screen'], SERVICE_SETUP_SCREEN_NAME);
            default:
              return state;
          }
      }

      return state;
    }
    case SET_SERVICE_NAME: {
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
      return state.setIn(['setup', 'naturalText'], action.text);
    }
    case UPDATE_MODEL_PREVIEW: {
      return state
        .setIn(['setup', 'modelDefinitionPreview'], action.preview);
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
      }
      return state
          .setIn(['user', 'password'], password);
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
      return state
        .setIn(
          ['dashboard', 'items'],
          state.getIn(['dashboard', 'items']).map((item, i) => item.set('selected', i === action.index)),
      );
    }
    case RECEIVE_SERVICE_LIST: {
      const services = action.services;

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
      const entities = normalizeService(action.service).entities;

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

      const existingEntries = state
        .getIn(entryIdsPath);
      const newEntries = existingEntries ?
        existingEntries.toSet()
        .union(fromJS([action.entry.id]).toSet())
        .toList() :
        fromJS([action.entry.id]);

      return state
        .setIn(entryIdsPath, newEntries)
        .set('entryById', fromJS(state.get('entryById')).merge(entryById))
        .set('valueById', fromJS(state.get('valueById').merge(valueById)));
    }
    case RECEIVE_MODEL: {
      const entities = normalizeModel(action.model).entities;

      const modelById = entities.model || {};

      const modelIdsPath = ['serviceById', `${state.getIn(['user', 'currentServiceId'])}`, 'Models'];

      return state
        .setIn(modelIdsPath, state.getIn(modelIdsPath).push(action.model.id))
        .set('modelById', fromJS(modelById).merge(state.get('modelById')));
    }
    case RECEIVE_ATTRIBUTE: {
      const entities = normalizeAttribute(action.attribute).entities;

      const attributeById = entities.attribute || {};

      const attributeIdsPath = ['modelById', `${action.attribute.ModelId}`, 'Attributes'];

      return state
        .setIn(attributeIdsPath, (state.getIn(attributeIdsPath) || fromJS([])).push(action.attribute.id))
        .set('attributeById', fromJS(attributeById).merge(state.get('attributeById')));
    }
    case SELECT_SERVICE: {
      return state.setIn(
        [
          'user', 'currentServiceId',
        ],
        action.id,
      );
    }
    case CHANGE_SELECTED_MODEL: {
      return state.setIn(
        [
          'dashboard', 'selectedModel',
        ],
        action.id,
      );
    }
    case DELETE_ENTRY_LOCALLY: {
      const entries = ['modelById', `${action.entry.ModelId}`, 'Entries'];
      return state
        .deleteIn(['entryById', `${action.entry.id}`])
        .setIn(entries, state.getIn(entries).filter(i => i !== action.entry.id));
    }
    case DELETE_MODEL_LOCALLY: {
      const models = ['serviceById', `${state.getIn(['user', 'currentServiceId'])}`, 'Models'];
      return state
        .deleteIn(['modelById', `${action.id}`])
        .setIn(models, state.getIn(models).filter(i => i !== action.id));
    }
    case DELETE_ATTRIBUTE_LOCALLY: {
      const modelId = state.getIn(['attributeById', `${action.id}`, 'ModelId']);
      const attributes = ['modelById', `${modelId}`, 'Attributes'];
      return state
        .deleteIn(['attributeById', `${action.id}`])
        .setIn(attributes, state.getIn(attributes).filter(i => i !== action.id));
    }
    case UPDATE_VALUE_LOCALLY: {
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
    case UPDATE_MODEL_LOCALLY: {
      const modelPath = ['modelById', `${action.id}`];
      return state
        .setIn(modelPath, state.getIn(modelPath).merge(fromJS(action.changes)));
    }
    case UPDATE_ATTRIBUTE_LOCALLY: {
      const path = ['attributeById', `${action.id}`];
      return state
        .setIn(path, state.getIn(path).merge(fromJS(action.changes)));
    }
    default:
      return state;
  }
}

export default easyAPI;
