import React, { PropTypes } from 'react';
import Radium from 'radium';
import Frame from './Frame';
import ServiceSetupNameContainer from '../containers/ServiceSetupNameContainer';
import ServiceSetupMethodContainer from '../containers/ServiceSetupMethodContainer';
import ServiceSetupNaturalContainer from '../containers/ServiceSetupNaturalContainer';
import setupScreens from '../utils/setupScreens';

const {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
} = setupScreens;


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
    <Frame>
      {inner}
    </Frame>
  );
}

ServiceSetup.PropTypes = {
  screen: PropTypes.string,
};

/* eslint-disable new-cap */
export default Radium(ServiceSetup);
