import React, { PropTypes } from 'react';
import Radium from 'radium';
import ServiceSetupNameContainer from '../containers/ServiceSetupNameContainer';
import ServiceSetupMethodContainer from '../containers/ServiceSetupMethodContainer';
import ServiceSetupNaturalContainer from '../containers/ServiceSetupNaturalContainer';
import Logo from './Logo';
import setupScreens from '../utils/setupScreens';

const {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
} = setupScreens;

const styles = {
  logo: {
    width: '90%',
    maxWidth: 960,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },
};

const ServiceSetup = ({ screen }) => {
  let inner;
  console.log('screen', screen);
  switch (screen) {
    case SERVICE_SETUP_SCREEN_NAME:
      inner = (<ServiceSetupNameContainer />);
      break;
    case SERVICE_SETUP_SCREEN_METHOD:
      inner = (<ServiceSetupMethodContainer />);
      break;
    case SERVICE_SETUP_SCREEN_NATURAL:
      inner = (<ServiceSetupNaturalContainer />);
      break;
    default:
      inner = (<p>{'404 Setup screen not found'}</p>);
  }

  return (
    <div style={styles.logo}>
      <Logo />
      {inner}
    </div>
  );
}

ServiceSetup.PropTypes = {
  screen: PropTypes.string,
};

/* eslint-disable new-cap */
export default Radium(ServiceSetup);
