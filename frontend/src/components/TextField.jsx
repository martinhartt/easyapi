import React, { PropTypes } from 'react';
import Radium from 'radium';
import ContentEditable from './ContentEditable';
import { Color, Dimensions } from './StyleConstant';


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
