import { connect } from 'react-redux';
import {
  updateUser,
  authUser,
} from '../actions/auth';
import AuthForm from '../components/AuthForm';

const mapStateToProps = state => ({
  username: state
      .getIn(['user', 'username']),
  password: state
      .getIn(['user', 'password']),
  errors: state
      .getIn(['user', 'errors']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({ username, password }) => dispatch(authUser(username, password)),
  onChange: ({ username, password }) => dispatch(updateUser(username, password)),
});

const AuthFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthForm);

export default AuthFormContainer;
