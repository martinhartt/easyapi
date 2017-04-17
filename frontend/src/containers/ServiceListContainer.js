import ServiceList from '../components/ServiceList';
import 'immutable';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  selectService,
  newService,
} from '../actions/setup';
import { getServiceList } from '../actions/auth/getServiceList';
import { getUser } from '../actions/auth/getUser';

const mapStateToProps = (state) => {
  const services = state.getIn(['user', 'services'])
      .map(id => state.getIn(['serviceById', `${id}`]))
      .filter(e => !!e)
      .toJS();

  return {
    services,
  };
};

const mapDispatchToProps = dispatch => ({
  onReady: () => { dispatch(getServiceList()); dispatch(getUser()); },
  onSelect: id =>
    dispatch(selectService(id)),
  onCreate: () => dispatch(newService()),
});


const ServiceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceList);

export default ServiceListContainer;
