import React from 'react';
import { lightBorder, Color } from '../StyleConstant';

const style = {
  height: 77,
  borderBottom: lightBorder,
};

const TopBar = ({ name, actions }) =>
  <div style={style}>
    {name}
  </div>;

export default TopBar;
