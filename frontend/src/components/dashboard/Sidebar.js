import React from 'react';
import SidebarItem from './SidebarItem';

const itemsExample = [
  { name: 'Structure', path: '/service/X/structure', selected: true },
  { name: 'Entries', path: '/service/X/entries' },
  { name: 'Pages', path: '/service/X/pages' },
  { name: 'About', path: '/service/X/about' },
  { name: 'Publish', path: '/service/X/publish' },
];

const Sidebar = ({ items = itemsExample, location, onSelect }) => <div>
  {items.map(
    (item, i) => <SidebarItem item={item} key={item.name} onClick={() => onSelect(i, items[i])} />,
  )}
</div>;

export default Sidebar;
