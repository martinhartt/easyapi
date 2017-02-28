import React from 'react';
import rowStyle from './rowStyle';
import RoundButton from '../../RoundButton';
import { Color } from '../../StyleConstant';


const style = {
  base: rowStyle
};

const Row = ({ children, highlighted, onHover }) => <div style={style.base}>
{children}
  <RoundButton text="X" color={Color.red}></RoundButton>

</div>

export default Row;
