import { connect } from 'react-redux';
import { updateService } from '../../actions/dashboard/updateService';
import { updateServiceLocally } from '../../actions/dashboard/updateServiceLocally';
import About from '../../components/dashboard/about/About';


const mapStateToProps = (immutableState) => {
  const state = immutableState.toJS();

  const service = state.serviceById[state.user.currentServiceId];

  // name: 'Pets',
  // url: 'pets',
  // author: 'Martin Hartt',
  // isPublic

  return {
    name: service.name,
    meta: {
      name: {
        value: service.name,
        label: 'Name',
      },
      handle: {
        value: service.handle,
        label: 'URL',
      },
      isPublic: {
        value: service.isPublic,
        label: 'Public?',
      },
    },
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: (changes) => {
    dispatch(updateServiceLocally(changes));
    dispatch(updateService(changes));
  },
});

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);

export default AboutContainer;
