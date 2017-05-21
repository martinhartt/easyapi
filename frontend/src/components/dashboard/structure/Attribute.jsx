import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import capitalizeString from '../../../utils/capitalizeString';
import { Color } from '../../StyleConstant';

const style = {
  base: {
    backgroundColor: Color.lighterGrey,
    marginBottom: 4,
    borderRadius: 3,
    padding: '5px 9px',
    cursor: 'pointer',
    minHeight: 25,
    transition: '0.3s all',
    ':hover': {
      backgroundColor: Color.lightGrey,
    },
  },
  noInteraction: {
    cursor: 'default',
  },
};

const prettify = string => string && string.replace(/_/g, ' ');

function formatAttribute(attribute) {
  const leftPar = attribute.multiple ? '[' : '';
  const rightPar = attribute.multiple ? ']' : '';
  return `${prettify(attribute.name)}${attribute.required ? '*' : ''} (${leftPar}${attribute.type}${rightPar})`;
}

const Attribute = ({ attribute, onClick, enableInteractions }) => <div onClick={onClick} style={[style.base, !enableInteractions && style.noInteraction]}>
  {formatAttribute(attribute)}
</div>;

Attribute.propTypes = {
  attribute: PropTypes.shape({
    name: PropTypes.string,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
  }),
  enableInteractions: PropTypes.bool,
};

export default Radium(Attribute);
