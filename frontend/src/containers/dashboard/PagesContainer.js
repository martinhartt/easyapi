import { connect } from 'react-redux';
import { updateModel } from '../../actions/dashboard/updateModel';
import { updateModelLocally } from '../../actions/dashboard/updateModelLocally';
import Pages from '../../components/dashboard/pages/Pages';


const mapStateToProps = (immutableState) => {
  const state = immutableState.toJS();

  const service = state.serviceById[state.user.currentServiceId];
  const models = service.Models.map(id => state.modelById[id]);

  const actions = [
    {
      label: 'Find',
      prop: 'isFindEnabled',
      method: 'GET',
    },
    {
      label: 'Find One',
      prop: 'isFindOneEnabled',
      method: 'GET',
    },
    {
      label: 'Create',
      prop: 'isCreateEnabled',
      method: 'POST',
    },
    {
      label: 'Update',
      prop: 'isUpdateEnabled',
      method: 'PATCH',
    },
    {
      label: 'Delete',
      prop: 'isDeleteEnabled',
      method: 'DELETE',
    },
  ];

  const urlPrefix = `http://localhost:9001/api/api/${state.user.username}/${service.shortName}/`;

  return {
    name: service.name,
    actions,
    models,
    urlPrefix,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: (id, changes) => {
    dispatch(updateModel(id, changes));
  },
});

const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);

export default PagesContainer;
