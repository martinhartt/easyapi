import { connect } from 'react-redux';
import ServiceSetup from '../components/ServiceSetup';
import 'immutable';

const mapStateToProps = (state, ownProps) => ({
  screen: state.getIn(['setup', 'screen']),
});

const ServiceSetupContainer = connect(
  mapStateToProps,
)(ServiceSetup);

export default ServiceSetupContainer;
