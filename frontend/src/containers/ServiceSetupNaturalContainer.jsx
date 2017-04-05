import { connect } from 'react-redux';
import 'immutable';
import {
  analyseNaturalText,
  createService,
} from '../actions/setup';
import ServiceSetupNatural from '../components/ServiceSetupNatural';

const mapStateToProps = state => ({
  text: state.getIn(['setup', 'naturalText']),
  annotations: state.getIn(['setup', 'naturalTextAnnotations']),
});

const mapDispatchToProps = dispatch => ({
  onDone: () => dispatch(createService()),
  onChange: text => dispatch(analyseNaturalText(text)),

});

const ServiceSetupNaturalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupNatural);

export default ServiceSetupNaturalContainer;
