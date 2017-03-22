import { connect } from 'react-redux';
import {
} from '../../actions/dashboard/changeSidebarItem';
import Structure from '../../components/dashboard/structure/Structure';
import 'immutable';

const mapStateToProps = (state) => {
  const service = state.getIn([
    'serviceById',
    state.getIn(['user', 'currentServiceId'])
  ]);

  const models = service.get('models')
    .map(i => state.getIn(['modelById', i]))
    .map(model => model.set(
      'attributes', model.get('attributes').map(i =>
        state.getIn(['attributeById', i])
      )
    )).toJS();

  const selectedAttribute = state.getIn([
    'attributeById',
    state.getIn(['structure', 'selectedAttribute'])
  ]);

  console.log(models, selectedAttribute)

  return {
    models,
    selectedAttribute,
  }
};

const mapDispatchToProps = (dispatch) => ({
})


const StructureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Structure);

export default StructureContainer;
