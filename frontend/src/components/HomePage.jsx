import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import AuthFormContainer from '../containers/AuthFormContainer';
import ServiceListContainer from '../containers/ServiceListContainer';
import Frame from './Frame';

const HomePage = ({ authenticated }) => (
  <Frame>
    {authenticated ?
      <ServiceListContainer />
      :
      <AuthFormContainer />
    }
  </Frame>
);

HomePage.propTypes = {
  authenticated: PropTypes.bool,
};

/* eslint-disable new-cap */
export default Radium(HomePage);
