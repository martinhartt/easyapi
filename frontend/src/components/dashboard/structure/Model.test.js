
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Model from './Model';

describe('<Model />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Model
      model={{
        name: 'Test',
        id: 3,
        attributes: [],
      }}
    />);
  });
});
