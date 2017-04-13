import { connect } from 'react-redux';
import {
  setServiceCreateMethod,
  nextScreen,
} from '../../actions/setup';
import SetupMethod from '../../components/setup/SetupMethod';

const mapStateToProps = state => ({
  method: state
      .get('setup')
      .get('method'),
});

const mapDispatchToProps = dispatch => ({
  onDone: () => dispatch(nextScreen()),
  onChange: method => dispatch(setServiceCreateMethod(method)),
});

const SetupMethodContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetupMethod);

export default SetupMethodContainer;
