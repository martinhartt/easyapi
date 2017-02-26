import React from 'react';
import Logo from './Logo';

const style = {
  width: '90%',
  maxWidth: 960,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 40,
}

const Frame = ({ children }) => <div style={style}>
  <Logo />
  {children}
</div>;

export default Frame;
