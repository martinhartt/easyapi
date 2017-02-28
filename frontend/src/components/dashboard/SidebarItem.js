import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Color } from '../StyleConstant';

const style = {
  base: {
    height: 57,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    textDecoration: 'none',
    color: Color.black,
    transition: '0.3s all',
    ':hover': {
      background: Color.lighterGrey,
    }
  },
  selected: {
    background: Color.lightGrey,
    ':hover': {
      background: Color.lightGrey,
    }
  }
}

const SidebarItem = ({ item }) =>
<Link
  style={{ textDecoration: 'none' }} to={item.path}>
  <div style={[style.base, item.selected && style.selected]}>
    {item.name}
  </div>
</Link>

export default Radium(SidebarItem);
