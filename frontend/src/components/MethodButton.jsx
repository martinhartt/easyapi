import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Color, Dimensions } from './StyleConstant';
import createMethods from '../utils/createMethods';

const {
  naturalLanguage,
  spreadsheet,
  device,
} = createMethods;

const activeStyle = {
  outline: 'none',
};

const style = {
  base: {
    minWidth: 150,
    height: 170,
    border: `${Dimensions.borderWidth}px solid ${Color.grey}`,
    borderRadius: 10,
    backgroundColor: Color.whiteText,
    cursor: 'pointer',
    margin: '0 13px',
    transition: `${Dimensions.transitionTime.normal} all`,
    fontSize: Dimensions.fontSize.normal,
    color: Color.black,
    ':hover': {
      border: `${Dimensions.borderWidth}px solid ${Color.greenLight}`,
    },
    ':active': activeStyle,
    ':focus': activeStyle,
  },
  selected: {
    border: `${Dimensions.borderWidth}px solid ${Color.greenDark}`,
    ':hover': {
      border: `${Dimensions.borderWidth}px solid ${Color.green}`,
    },
  },
  image: {
    scratch: {
      width: 83,
    },
    spreadsheet: {
      width: 81,
    },
    device: {
      width: 80,
    },
  },
  inner: {
    textAlign: 'center',
    marginBottom: 20,
  },
};

const MethodButton = ({ method, onClick, isSelected }) => {
  let text;
  let image;

  switch (method) {
    case naturalLanguage:
      text = 'Scratch';
      image = 'scratch';
      break;
    case spreadsheet:
      text = 'Dataset';
      image = 'spreadsheet';
      break;
    case device:
      text = 'Device';
      image = 'device';
      break;
  }

  return (
    <button
      onClick={onClick} style={[
        style.base,
        isSelected ? style.selected : {},
      ]}
    >
      <div style={style.inner}>
        <img src={`/img/${image}.png`} style={style.image[image]} alt={text} />
      </div>
      {text}
    </button>
  );
};

MethodButton.PropTypes = {
  method: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default Radium(MethodButton);
