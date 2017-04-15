
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SidebarItem from './SidebarItem';

describe('<SidebarItem />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<SidebarItem
      item={{
        name: 'Hello',
        path: 'hello',
        selected: true,
      }}
    />);
  });
});
