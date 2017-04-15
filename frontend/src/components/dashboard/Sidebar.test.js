
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Sidebar
      items={[]}
    />);
  });
});
