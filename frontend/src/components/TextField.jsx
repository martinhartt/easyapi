import React, { PropTypes } from 'react';
import Radium from 'radium';
import ContentEditable from './ContentEditable';
import StyleConstant from './StyleConstant';
const Color = StyleConstant.Color;
const Dimensions = StyleConstant.Dimensions;


const activeStyle = {
  outline: 'none',
  border: `${Dimensions.borderLength}px solid ${Color.green}`,
};

const styles = {
  base: {
    border: `${Dimensions.borderLength}px solid ${Color.grey}`,
    minWidth: Dimensions.fieldWidth,
    height: Dimensions.fieldHeight - Dimensions.borderLength * 2,
    borderRadius: Dimensions.borderRadius,
    fontSize: Dimensions.fontSize.normal,
    padding: `0 ${Dimensions.padding}px`,
    transition: ` ${Dimensions.transitionTime.normal} all`,
    ':active': activeStyle,
    ':focus': activeStyle,
    width: 500,
    height: 130,
    padding: Dimensions.padding,
  },
};

function stripHTML(html) {
  return html.replace(/\<\/?\w+\>/g, '')
}

const TextField = ({ text, placeholder, onChange, annotations}) => (
  <ContentEditable
      html={text}
      onChange={(e) => onChange(stripHTML(e.target.value))}
      style={[styles.base, styles.long]}
    />
);

TextField.propTypes = {
  text: PropTypes.string.isRequired,
};

/* eslint-disable new-cap */
export default Radium(TextField);
