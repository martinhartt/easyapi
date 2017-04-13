import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Frame from '../Frame';
import SetupNameContainer from '../../containers/setup/SetupNameContainer';
import SetupMethodContainer from '../../containers/setup/SetupMethodContainer';
import SetupNaturalContainer from '../../containers/setup/SetupNaturalContainer';
import SetupSpreadsheetContainer from '../../containers/setup/SetupSpreadsheetContainer';
import {
  SERVICE_SETUP_SCREEN_METHOD,
  SERVICE_SETUP_SCREEN_NAME,
  SERVICE_SETUP_SCREEN_NATURAL,
  SERVICE_SETUP_SCREEN_SPREADSHEET,
} from '../../utils/setupScreens';

const Setup = ({ screen }) => {
  let inner;

  switch (screen) {
    case SERVICE_SETUP_SCREEN_NAME:
      inner = (<SetupNameContainer />);
      break;
    case SERVICE_SETUP_SCREEN_METHOD:
      inner = (<SetupMethodContainer />);
      break;
    case SERVICE_SETUP_SCREEN_NATURAL:
      inner = (<SetupNaturalContainer />);
      break;
    case SERVICE_SETUP_SCREEN_SPREADSHEET:
      inner = (<SetupSpreadsheetContainer />);
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

Setup.propTypes = {
  screen: PropTypes.string,
};

/* eslint-disable new-cap */
export default Radium(Setup);
