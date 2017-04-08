import React from 'react';
import Radium from 'radium';

const style = {
  base: {
    minWidth: 70,
    height: '80%',
    marginLeft: 0,
    textAlign: 'center',
    marginRight: 0,
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
};

const Column = ({ value, isItem, onChange }) =>
  isItem ?
    <input style={[style.base, style.item]} value={value} onChange={onChange} /> :
    <div style={[style.base]}>{value}</div>;


export default Radium(Column);
