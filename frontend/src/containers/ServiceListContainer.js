import ServiceList from '../components/ServiceList';
import 'immutable';
import { connect } from 'react-redux';
import {
  selectService,
  newService,
} from '../actions/setup';

const mapStateToProps = (state, ownProps) => {
  return {
    services: state.getIn(['user', 'services'])
      .map(id => state.getIn(['serviceById', `${id}`])).toJS()
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: id => dispatch(selectService(id)),
    onCreate: () => dispatch(newService()),
  };
};


const ServiceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceList);

export default ServiceListContainer;
