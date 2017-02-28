import React from 'react';

const style = {
  minWidth: 70,
  paddingLeft: 30,
  paddingRight: 30,
}

const Column = ({ value }) => <div style={style}>{value}</div>

export default Column;
