
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Logo from './Logo';

describe('<Logo />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Logo />);

  });
});
