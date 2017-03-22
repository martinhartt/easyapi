import { connect } from 'react-redux';
import {
  changeSidebarItem
} from '../../actions/dashboard/changeSidebarItem';
import Sidebar from '../../components/dashboard/Sidebar';
import 'immutable';

const mapStateToProps = (state) => ({
  items: state.getIn(['structure', 'items']).toJS(),
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (index) => dispatch(changeSidebarItem(index)),
})


const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
