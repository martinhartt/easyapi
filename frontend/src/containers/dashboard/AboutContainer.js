import { connect } from 'react-redux';
import { updateService } from '../../actions/dashboard/updateService';
import { updateServiceLocally } from '../../actions/dashboard/updateServiceLocally';
import About from '../../components/dashboard/about/About';


const mapStateToProps = (immutableState) => {
  const state = immutableState.toJS();

  const service = state.serviceById[state.user.currentServiceId];

  return {
    name: service.name,
    meta: {
      name: {
        value: service.name,
        label: 'Name',
      },
      shortName: {
        value: service.shortName,
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
