import { connect } from 'react-redux';
import 'immutable';
import { analyseSpreadsheet } from '../actions/setup/analyseSpreadsheet';
import ServiceSetupDevice from '../components/ServiceSetupDevice';

const mapStateToProps = state => ({
  file: state.getIn(['setup', 'file']),
  annotations: state.getIn(['setup', 'modelDefinitionPreview']),
});

const mapDispatchToProps = dispatch => ({
  // onDone: () => dispatch(createService()),
  onChange: file => dispatch(analyseSpreadsheet(file)),

});

const ServiceSetupDeviceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupDevice);

export default ServiceSetupDeviceContainer;
