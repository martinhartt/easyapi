import React from 'react';
import PropTypes from 'prop-types';
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
    },
  },
  selected: {
    background: Color.lightGrey,
    ':hover': {
      background: Color.lightGrey,
    },
  },
};

const SidebarItem = ({ item, onClick }) =>
  <div
    style={{ textDecoration: 'none', cursor: 'pointer' }}
    onClick={onClick}
  >
    <div style={[style.base, item.selected && style.selected]}>
      {item.name}
    </div>
  </div>;

SidebarItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    selected: PropTypes.bool,
  }),
  onClick: PropTypes.func,
};

export default Radium(SidebarItem);
