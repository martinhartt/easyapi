import React, { PropTypes } from 'react';
import Radium from 'radium';
import Frame from './Frame';
import ServiceSetupNameContainer from '../containers/ServiceSetupNameContainer';
import ServiceSetupMethodContainer from '../containers/ServiceSetupMethodContainer';
import ServiceSetupNaturalContainer from '../containers/ServiceSetupNaturalContainer';
import ServiceSetupSpreadsheetContainer from '../containers/ServiceSetupSpreadsheetContainer';
import ServiceSetupDeviceContainer from '../containers/ServiceSetupDeviceContainer';
import {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
  SERVICE_SETUP_SCREEN_SPREADSHEET,
  SERVICE_SETUP_SCREEN_DEVICE,
} from '../utils/setupScreens';

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
    case SERVICE_SETUP_SCREEN_SPREADSHEET:
      inner = (<ServiceSetupSpreadsheetContainer />);
      break;
    case SERVICE_SETUP_SCREEN_DEVICE:
      inner = (<ServiceSetupDeviceContainer />);
      break;
    default:
      inner = (<p>{'404 Setup screen not found'}</p>);
  }

  return (
    <Frame>
      {inner}
    </Frame>
  );
};

ServiceSetup.PropTypes = {
  screen: PropTypes.string,
};

/* eslint-disable new-cap */
export default Radium(ServiceSetup);
