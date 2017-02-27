import React, { PropTypes } from 'react';
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
    width: Dimensions.fieldHeight,
    height: Dimensions.fieldHeight,
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: `${Dimensions.transitionTime.normal} background-color`,
    fontSize: 30,
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
  }
}

const RoundButton = ({ text, onClick, isDisabled }) => (
  <button onClick={onClick} style={[style.base, isDisabled ? style.isDisabled : {}]}>
    {text}
  </button>
)

RoundButton.PropTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
}


export default Radium(RoundButton);
