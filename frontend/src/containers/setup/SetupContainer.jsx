import { connect } from 'react-redux';
import Setup from '../../components/setup/Setup';
import 'immutable';

const mapStateToProps = (state, ownProps) => ({
  screen: state.getIn(['setup', 'screen']),
});

const SetupContainer = connect(
  mapStateToProps,
)(Setup);

export default SetupContainer;
