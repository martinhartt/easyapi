import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import 'immutable';


const mapStateToProps = state => ({
  authenticated: state.getIn(['user', 'authenticated']),
});


const HomePageContainer = connect(
  mapStateToProps,
)(HomePage);

export default HomePageContainer;
