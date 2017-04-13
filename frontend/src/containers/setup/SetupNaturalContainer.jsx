import { connect } from 'react-redux';
import 'immutable';
import {
  analyseNaturalText,
  createService,
} from '../../actions/setup';
import SetupNatural from '../../components/setup/SetupNatural';

const mapStateToProps = (state) => {
  const preview = state.getIn(['setup', 'modelDefinitionPreview']);
  console.log(preview, preview && preview.size);
  return {
    text: state.getIn(['setup', 'naturalText']),
    annotations: preview,
    nextEnabled: preview && !!preview.length,
  };
};

const mapDispatchToProps = dispatch => ({
  onDone: () => dispatch(createService()),
  onChange: text => dispatch(analyseNaturalText(text)),
});

const SetupNaturalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetupNatural);

export default SetupNaturalContainer;
