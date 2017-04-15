

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Dashboard>
      <p>Hello</p>
    </Dashboard>);
  });
});
