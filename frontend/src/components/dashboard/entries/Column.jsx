import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const style = {
  base: {
    minWidth: 70,
    // height: '80%',
    marginLeft: 0,
    textAlign: 'center',
    marginRight: 5,
    width: 190,
  },
  item: {
    borderRadius: 3,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#EEE',
    },
    border: 'none',
    height: 45,
    fontSize: 18,
    ':focus': {
      outline: 0,
      border: 0,
    },
  },
  first: {
    width: 80,
  },
};

const Column = ({ value, type, isItem, onChange, first = false }) =>
  isItem ?
    <input style={[style.base, style.item, first && style.first]} type={(type === 'string' ? 'text' : 'number')} value={value || ''} onChange={onChange} /> :
    <div style={[style.base, first && style.first]}>{value}</div>;


Column.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Radium(Column);
