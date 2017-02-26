import React, { PropTypes } from 'react';
import Radium from 'radium';
import StyleConstant from './StyleConstant';
const Color = StyleConstant.Color;
const Dimensions = StyleConstant.Dimensions;

const activeStyle = {
  outline: 'none',
  border: `${Dimensions.borderWidth}px solid ${Color.green}`,
};

const styles = {
  base: {
    border: `${Dimensions.borderWidth}px solid ${Color.grey}`,
    minWidth: Dimensions.fieldWidth,
    height: Dimensions.fieldHeight - Dimensions.borderWidth * 2,
    borderRadius: Dimensions.borderRadius,
    fontSize: Dimensions.fontSize.normal,
    padding: `0 ${Dimensions.padding}px`,
    transition: ` ${Dimensions.transitionTime.normal} all`,
    ':active': activeStyle,
    ':focus': activeStyle,
  },
  long: {
    width: 500,
    height: 130,
    padding: Dimensions.padding,
  }
};

const TextInput = ({ text, placeholder, onChange, long = false, name, type }) => (
  long ? (
    <textarea
      value={text}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={[styles.base, styles.long]}
      name={name}
    />
  ) : (
    <input
      type="text"
      value={text}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={styles.base}
    />
  )

);

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
};

/* eslint-disable new-cap */
export default Radium(TextInput);
