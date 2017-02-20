import { connect } from 'react-redux';
import {
  analyseNaturalText,
  nextScreen,
} from '../actions/setup';
import ServiceSetupNatural from '../components/ServiceSetupNatural';
import 'immutable';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.getIn(['setup', 'naturalText']),
    annotations: state.getIn(['setup', 'naturalTextAnnotations']),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDone: () => dispatch(nextScreen()),
  onChange: (text) =>  dispatch(analyseNaturalText(text)),

});

const ServiceSetupNaturalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupNatural);

export default ServiceSetupNaturalContainer;
