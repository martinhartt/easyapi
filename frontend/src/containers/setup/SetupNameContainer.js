import { connect } from 'react-redux';
import 'immutable';
import {
  setServiceName,
  nextScreen,
} from '../../actions/setup';
import ServiceSetupName from '../../components/setup/SetupName';

const mapStateToProps = state => ({
  name: state
      .get('setup')
      .get('name'),
});

const mapDispatchToProps = dispatch => ({
  onDone: () => dispatch(nextScreen()),
  onChange: name => dispatch(setServiceName(name)),

});

const SetupNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupName);

export default SetupNameContainer;
