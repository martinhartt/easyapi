import { connect } from 'react-redux';
import {
  changeDashboardPage,
} from '../../actions/dashboard/changeDashboardPage';
import Sidebar from '../../components/dashboard/Sidebar';
import 'immutable';

const mapStateToProps = state => ({
  items: state.getIn(['dashboard', 'items']).toJS(),
});

const mapDispatchToProps = dispatch => ({
  onSelect: (index, item) => dispatch(changeDashboardPage(index, item)),
});


const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);

export default SidebarContainer;
