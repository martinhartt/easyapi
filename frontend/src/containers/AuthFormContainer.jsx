import { connect } from 'react-redux';
import {
  updateUser,
  authUser,
} from '../actions/auth';
import AuthForm from '../components/AuthForm';
import 'immutable';

const mapStateToProps = (state, ownProps) => {
  return {
    email: state
      .getIn(['user', 'email']),
    password: state
      .getIn(['user', 'password']),
    errors: state
      .getIn(['user', 'errors']),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({email, password}) => dispatch(authUser(email, password)),
  onChange: ({email, password}) =>  dispatch(updateUser(email, password)),
});

const AuthFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthForm);

export default AuthFormContainer;
