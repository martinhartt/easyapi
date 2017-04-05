import ServiceList from '../components/ServiceList';
import 'immutable';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  selectService,
  newService,
} from '../actions/setup';

const mapStateToProps = (state, ownProps) => ({
  services: state.getIn(['user', 'services'])
      .map(id => state.getIn(['serviceById', `${id}`])).toJS(),
});

const mapDispatchToProps = dispatch => ({
  onSelect: (id) => {
    dispatch(selectService(id));
    dispatch(push(`/service/${id}/structure`));
  },
  onCreate: () => dispatch(newService()),
});


const ServiceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceList);

export default ServiceListContainer;
