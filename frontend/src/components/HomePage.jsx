import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Router, Route, browserHistory } from 'react-router';
import AuthFormContainer from '../containers/AuthFormContainer';

const HomePage = ({ params: { page = 'setup' } }) => (
  <AuthFormContainer />
);

HomePage.propTypes = {
  params: PropTypes.any,
};

/* eslint-disable new-cap */
export default Radium(HomePage);
