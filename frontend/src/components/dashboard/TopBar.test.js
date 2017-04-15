
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TopBar from './TopBar';

describe('<TopBar />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<TopBar
      name="Example"
    />);
  });
});
