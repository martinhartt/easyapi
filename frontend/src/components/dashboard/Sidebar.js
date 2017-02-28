import React from 'react';
import SidebarItem from './SidebarItem';

const itemsExample = [
  { name: 'Structure', path: '/service/X/structure', selected: true },
  { name: 'Entries', path: '/service/X/entries' },
  { name: 'Pages', path: '/service/X/pages' },
  { name: 'About', path: '/service/X/about' },
  { name: 'Publish', path: '/service/X/publish' },
]

const Sidebar = ({ items = itemsExample, location }) => <div>
  {items.map(item => <SidebarItem item={item} />)}
</div>;

export default Sidebar;