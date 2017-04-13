import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import rowStyle from './rowStyle';
import { Color } from '../../StyleConstant';

const style = {
  base: [
    rowStyle,
    {
      backgroundColor: Color.lighterGrey,
    },
  ],
};

const RowHeader = ({ children }) => <div style={style.base}>{children}</div>;

RowHeader.propTypes = {
  children: PropTypes.node,
};

export default Radium(RowHeader);
