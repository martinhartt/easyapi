import { connect } from 'react-redux';
import 'immutable';
import {
  createService,
} from '../actions/setup';
import { analyseSpreadsheet } from '../actions/setup/analyseSpreadsheet';
import ServiceSetupSpreadsheet from '../components/ServiceSetupSpreadsheet';

const mapStateToProps = (state) => {
  const preview = state.getIn(['setup', 'modelDefinitionPreview']);
  return {
    file: state.getIn(['setup', 'file']),
    annotations: preview,
    nextEnabled: preview && !!preview.length,
  };
};


const mapDispatchToProps = dispatch => ({
  onDone: () => dispatch(createService()),
  onChange: ([file]) => dispatch(analyseSpreadsheet(file)),

});

const ServiceSetupSpreadsheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupSpreadsheet);

export default ServiceSetupSpreadsheetContainer;