import { connect } from 'react-redux';
import {
  setServiceName,
  nextScreen,
} from '../actions/setup';
import ServiceSetupName from '../components/ServiceSetupName';
import 'immutable';

const mapStateToProps = (state, ownProps) => {

  console.log(state.get('serviceById').get(state.get('user').get('currentServiceId')).get('name'));
  return {
    name: state
      .get('serviceById')
      .get(state.get('user').get('currentServiceId'))
      .get('name'),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDone: () => dispatch(nextScreen()),
  onChange: (name) =>  dispatch(setServiceName(name)),

});

const ServiceSetupNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceSetupName);

export default ServiceSetupNameContainer;
