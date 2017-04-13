import { connect } from 'react-redux';
import { debounce, difference } from 'underscore';
import { changeSelectedModel } from '../../actions/dashboard/changeSelectedModel';
import { createEntry } from '../../actions/dashboard/createEntry';
import { deleteEntry } from '../../actions/dashboard/deleteEntry';
import { updateValue } from '../../actions/dashboard/updateValue';
import { updateValueLocally } from '../../actions/dashboard/updateValueLocally';
import Entries from '../../components/dashboard/entries/Entries';


const mapStateToProps = (immutableState) => {
  const state = immutableState.toJS();

  const service = state.serviceById[state.user.currentServiceId];

  const selectedModel = state.dashboard.selectedModel || service.Models[0];


  if (!service) {
    return {};
  }

  const model = state.modelById[selectedModel];

  if (!model) return {};

  model.attributes = model.Attributes ? model.Attributes.map(i => state.attributeById[i]) : [];
  model.entries = model.Entries ? model.Entries.map(i => state.entryById[i]) : [];
  console.log('This is ', model);

  const headers = service.Models
    .map(i => state.modelById[i])
    .map(m => ({ id: m.id, text: m.name, selected: m.id === selectedModel }));
  const attributes = model.attributes;

  const entries = [];
  for (const entry of model.entries) {
    const obj = { id: entry.index, realId: entry.id };

    const values = entry.Values ? entry.Values.map(i => state.valueById[i]) : [];

    const missing = difference(
      attributes.map(a => a.id),
      values.map(v => v.Attribute || v.AttributeId),
    ).map(id => state.attributeById[id]);

    for (const valueObj of values) {
      const value = valueObj.value;

      const attr = state.attributeById[valueObj.Attribute || valueObj.AttributeId];

      if (!attr) continue;
      obj[attr.name] = { value, id: valueObj.id };
    }

    // for (const attribute of missing) {
    //   obj[attribute.name] = { value: '' };
    // }
    entries.push(obj);
  }

/*


const entriesExample = [
  {
    id: 1,
    name: 'Spot',
    breed: 'Bulldog',
    owner: 'Martin',
  },
  {
    id: 2,
    name: 'Max',
    breed: 'Bulldog',
    owner: 'Jon Snow',
  },
];

valueById: {
  '1': {
    id: 1,
    value: 'Hello',
    createdAt: '2017-04-05T23:00:00.000Z',
    updatedAt: '2017-04-05T23:00:00.000Z',
    EntryId: 1,
    AttributeId: 1,
    Attribute: 1
  },
  '2': {
    id: 2,
    value: 'Breed',
    createdAt: '2017-04-05T23:00:00.000Z',
    updatedAt: '2017-04-05T23:00:00.000Z',
    EntryId: 1,
    AttributeId: 2,
    Attribute: 2
  }
},
entryById: {
  '1': {
    id: 1,
    index: 1,
    createdAt: '2017-04-05T23:00:00.000Z',
    updatedAt: '2017-04-05T23:00:00.000Z',
    ModelId: 1,
    Values: [
      1,
      2
    ]
  }
},
*/


  return {
    name: service.name,
    headers,
    attributes,
    entries,
  };
};

const mapDispatchToProps = (dispatch) => {
  const update = debounce((id, attr, value) => dispatch(updateValue(id, attr, value)), 1000);

  return {
    onSelected: id => dispatch(changeSelectedModel(id)),
    onCreate: () => dispatch(createEntry()),
    onDelete: id => dispatch(deleteEntry(id)),
    onUpdate: (id, attr, value, valueId) => {
      dispatch(updateValueLocally(id, valueId, value));
      update(id, attr, value);
    },
  };
};

const EntriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entries);

export default EntriesContainer;
