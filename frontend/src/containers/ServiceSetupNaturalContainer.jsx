import { connect } from 'react-redux';
import 'immutable';
import {
  analyseNaturalText,
  createService,
} from '../actions/setup';
import ServiceSetupNatural from '../components/ServiceSetupNatural';

const mapStateToProps = (state) => {
  const preview = state.getIn(['setup', 'modelDefinitionPreview']);
  console.log(preview, preview && preview.size);
  return {
    text: state.getIn(['setup', 'naturalText']),
    annotations: preview,
    nextEnabled: preview && !!preview.size,
  };
};

const mapDispatchToProps = dispatch => ({
  onDone: () => dispatch(createService()),
  onChange: text => dispatch(analyseNaturalText(text)),
});

const ServiceSetupNaturalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupNatural);

export default ServiceSetupNaturalContainer;
