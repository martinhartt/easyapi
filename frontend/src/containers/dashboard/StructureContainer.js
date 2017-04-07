import { connect } from 'react-redux';
import {
} from '../../actions/dashboard/changeSidebarItem';
import Structure from '../../components/dashboard/structure/Structure';
import 'immutable';

const mapStateToProps = (immutableState) => {
  const state = immutableState.toJS();
  // const service = state.getIn([
  //   'serviceById',
  //   `${state.getIn(['user', 'currentServiceId'])}`,
  // ]);

  const service = state.serviceById[state.user.currentServiceId];

  if (!service) {
    return {};
  }

  const models = service.Models
    .map(i => state.modelById[i])
    .map(model => Object.assign(model, {
      attributes: model.Attributes.map(i => state.attributeById[i]),
    }));


  const selectedAttribute = state.dashboard.selectedAttribute &&
   state.attributeById[state.dashboard.selectedAttribute];

  return {
    models,
    selectedAttribute,
  };
};

const mapDispatchToProps = dispatch => ({
});


const StructureContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Structure);

export default StructureContainer;
