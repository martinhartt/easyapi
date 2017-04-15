
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<TextInput
      text="Hello"
      placeholder="Example"
      long
      name="ok"
      type="text"
      id={4}
    />);
  });
});
