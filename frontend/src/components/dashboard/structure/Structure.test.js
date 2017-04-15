
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Structure from './Structure';

describe('<Structure />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Structure
      name="Example"
      models={[]}
    />);
  });
});
