import React from 'react';
import Radium from 'radium';
import rowStyle from './rowStyle';
import { Color } from '../../StyleConstant';

const style = {
  base: [
    rowStyle,
    {
      backgroundColor: Color.lighterGrey,
    }
  ],
};

const RowHeader = ({ children }) => <div style={style.base}>{children}</div>

export default Radium(RowHeader);
