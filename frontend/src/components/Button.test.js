
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

describe('<Button />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Button
      text="Next"
      isDisabled={false}
    />);
  });
});
