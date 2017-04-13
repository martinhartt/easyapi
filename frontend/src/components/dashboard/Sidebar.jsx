import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';

const itemsExample = [
  { name: 'Structure', path: '/service/X/structure', selected: true },
  { name: 'Entries', path: '/service/X/entries' },
  { name: 'Pages', path: '/service/X/pages' },
  { name: 'About', path: '/service/X/about' },
  { name: 'Publish', path: '/service/X/publish' },
];

const Sidebar = ({ items = itemsExample, onSelect }) => <div>
  {items.map(
    (item, i) => <SidebarItem item={item} key={item.name} onClick={() => onSelect(i, items[i])} />,
  )}
</div>;

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    selected: PropTypes.bool,
  })),
  onSelect: PropTypes.func,
};

export default Sidebar;
