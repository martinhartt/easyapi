
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Tabs from './Tabs';

describe('<Tabs />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Tabs
      headers={[]}
    />);
  });
});
