import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import 'immutable';



const mapStateToProps = (state, ownProps) => {
  console.log('>>', state.get('user').get('authenticated'));
  return {
    authenticated: state.getIn(['user', 'authenticated']),
  }
};


const HomePageContainer = connect(
  mapStateToProps,
)(HomePage);

export default HomePageContainer;
