import { connect } from 'react-redux';
import {
} from '../../actions/dashboard/changeSidebarItem';
import Structure from '../../components/dashboard/structure/Structure';
import { selectAttribute } from '../../actions/dashboard/selectAttribute';
import { createModel } from '../../actions/dashboard/createModel';
import { createAttribute } from '../../actions/dashboard/createAttribute';
import { deleteModel } from '../../actions/dashboard/deleteModel';
import { deleteAttribute } from '../../actions/dashboard/deleteAttribute';

const mapStateToProps = (immutableState) => {
  const state = immutableState.toJS();

  const service = state.serviceById[state.user.currentServiceId];

  if (!service) {
    return {};
  }

  const models = service.Models
    .map(i => state.modelById[i])
    .map(model => Object.assign(model, {
      attributes: model.Attributes && model.Attributes.map(i => state.attributeById[i]),
    }));

  const selectedAttribute = state.dashboard.selectedAttribute &&
   state.attributeById[state.dashboard.selectedAttribute];

  return {
    name: service.name,
    models,
    selectedAttribute,
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectAttribute: id => dispatch(selectAttribute(id)),
  onModelCreate: () => dispatch(createModel()),
  onAttributeCreate: model => dispatch(createAttribute(model)),
  onModelDelete: id => dispatch(deleteModel(id)),
  onAttributeDelete: id => dispatch(deleteAttribute(id)),
});


const StructureContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Structure);

export default StructureContainer;
