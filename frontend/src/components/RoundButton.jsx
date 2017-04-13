import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Color, Dimensions } from './StyleConstant';

const activeStyle = {
  opacity: 1.0,
  border: 'none',
  outline: 'none',
};

const style = {
  base: {
    backgroundColor: Color.green,
    width: Dimensions.fieldHeight,
    height: Dimensions.fieldHeight,
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: `${Dimensions.transitionTime.normal} opacity`,
    fontSize: 30,
    backgroundSize: 'contain',
    color: Color.whiteText,
    ':hover': {
      opacity: 0.8,
    },
    ':active': activeStyle,
    ':focus': activeStyle,
  },
  isDisabled: {
    pointerEvents: 'none',
    backgroundColor: Color.grey,
  },
};

const RoundButton = ({ text, onClick, isDisabled, color = Color.green, small = false }) => (
  <button onClick={onClick} style={[style.base, isDisabled && style.isDisabled, { backgroundColor: color, backgroundImage: `url('/img/${text}.png')` }, small && { width: 25, height: 25 }]} />
);

RoundButton.PropTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  color: PropTypes.string,
  small: PropTypes.bool,
};


export default Radium(RoundButton);
