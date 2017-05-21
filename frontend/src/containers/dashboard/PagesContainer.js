import { connect } from 'react-redux';
import { updateModel } from '../../actions/dashboard/updateModel';
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
      suffix: '',
    },
    {
      label: 'Find One',
      prop: 'isFindOneEnabled',
      method: 'GET',
      suffix: '/:id',
    },
    {
      label: 'Create',
      prop: 'isCreateEnabled',
      method: 'POST',
      suffix: '',
    },
    {
      label: 'Update',
      prop: 'isUpdateEnabled',
      method: 'PATCH',
      suffix: '/:id',
    },
    {
      label: 'Delete',
      prop: 'isDeleteEnabled',
      method: 'DELETE',
      suffix: '/:id',
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
