import { connect } from 'react-redux';
import {
  setServiceCreateMethod,
  nextScreen,
} from '../actions/setup';
import ServiceSetupMethod from '../components/ServiceSetupMethod';
import 'immutable';

const mapStateToProps = (state, ownProps) => {
  return {
    method: state
      .get('setup')
      .get('method'),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDone: () => dispatch(nextScreen()),
  onChange: (method) =>  dispatch(setServiceCreateMethod(method)),
});

const ServiceSetupMethodContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupMethod);

export default ServiceSetupMethodContainer;
