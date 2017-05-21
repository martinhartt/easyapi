import { connect } from 'react-redux';
import Setup from '../../components/setup/Setup';

const mapStateToProps = state => ({
  screen: state.getIn(['setup', 'screen']),
});

const SetupContainer = connect(
  mapStateToProps,
)(Setup);

export default SetupContainer;
