
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Frame from './Frame';

describe('<Frame />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Frame>
      <p>Hello</p>
    </Frame>);
  });
});
