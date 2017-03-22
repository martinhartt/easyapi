import React from 'react';
import { lightBorder, Color } from '../StyleConstant';
import RoundButton from '../RoundButton';

const style = {
  base: {
    height: 74.5,
    borderBottom: lightBorder,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: Color.whiteText,
  },
  h2: {
    margin: 0,
    padding: 0,
    fontWeight: 500,
    fontSize: 24,
  }
};

const TopBar = ({ name, actions, onNew }) =>
  <div style={style.base}>
    <h2 style={style.h2}>{name}</h2>
    <RoundButton text="+" onClick={onNew}></RoundButton>
  </div>;

export default TopBar;
