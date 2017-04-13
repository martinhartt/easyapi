import React from 'react';
import PropTypes from 'prop-types';
import rowStyle from './rowStyle';
import RoundButton from '../../RoundButton';
import { Color } from '../../StyleConstant';


const style = {
  base: rowStyle,
};

const Row = ({ children, onDelete }) => <div style={style.base}>
  {children}
  <RoundButton onClick={onDelete} text="remove" color={Color.red} />

</div>;

Row.propTypes = {
  children: PropTypes.node,
  onDelete: PropTypes.func,
};

export default Row;
