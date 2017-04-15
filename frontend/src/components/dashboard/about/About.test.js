
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import About from './About';

describe('<About />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<About
      name="Example"
      meta={{
        name: 'Example',
        url: 'example',
        author: 'Martin Hartt',
        public: true,
      }}
    />);
  });
});
