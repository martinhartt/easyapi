import React from 'react';
import rowStyle from './rowStyle';
import RoundButton from '../../RoundButton';
import { Color } from '../../StyleConstant';


const style = {
  base: rowStyle,
};

const Row = ({ children, highlighted, onHover, onDelete }) => <div style={style.base}>
  {children}
  <RoundButton onClick={onDelete} text="-" color={Color.red} />

</div>;

export default Row;
