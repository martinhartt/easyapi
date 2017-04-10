import { connect } from 'react-redux';
import { updateService } from '../../actions/dashboard/updateService';
import { updateServiceLocally } from '../../actions/dashboard/updateServiceLocally';
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

  const urlPrefix = `http://easyapi.com/api/${state.user.username}/${service.handle}/`;

  return {
    name: service.name,
    actions,
    models,
    urlPrefix,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: (changes) => {
    console.log(changes);
    // dispatch(updateServiceLocally(changes));
    // dispatch(updateService(changes));
  },
});

const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);

export default PagesContainer;
