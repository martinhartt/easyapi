import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Color, Dimensions } from './StyleConstant';

const activeStyle = {
  backgroundColor: Color.greenDark,
  border: 'none',
  outline: 'none',
};

const style = {
  base: {
    backgroundColor: Color.green,
    minWidth: Dimensions.fieldWidth,
    height: Dimensions.fieldHeight,
    border: 'none',
    borderRadius: Dimensions.borderRadius,
    cursor: 'pointer',
    transition: `${Dimensions.transitionTime.normal} background-color`,
    fontSize: Dimensions.fontSize.normal,
    color: Color.whiteText,
    ':hover': {
      backgroundColor: Color.greenLight,
    },
    ':active': activeStyle,
    ':focus': activeStyle,
  },
  isDisabled: {
    pointerEvents: 'none',
    backgroundColor: Color.grey,
  },
};

const Button = ({ text, onClick, isDisabled, type }) => (
  <button type={type} onClick={onClick} style={[style.base, isDisabled ? style.isDisabled : {}]}>
    {text}
  </button>
);

Button.PropTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};


export default Radium(Button);
