import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Router, Route, browserHistory } from 'react-router';
import AuthFormContainer from '../containers/AuthFormContainer';
import Frame from './Frame';

const HomePage = ({ params: { page = 'setup' } }) => (
  <Frame>
    <AuthFormContainer />
  </Frame>
);

HomePage.propTypes = {
  params: PropTypes.any,
};

/* eslint-disable new-cap */
export default Radium(HomePage);
