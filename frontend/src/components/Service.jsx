import React, { PropTypes } from 'react';
import Radium from 'radium';
import ServiceSetupContainer from '../containers/ServiceSetupContainer';
import { Router, Route, browserHistory } from 'react-router';

const Service = ({ params: { page = 'setup' } }) => <ServiceSetupContainer />;

Service.propTypes = {
  params: PropTypes.any,
};

/* eslint-disable new-cap */
export default Radium(Service);
