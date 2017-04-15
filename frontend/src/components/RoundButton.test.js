
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import RoundButton from './RoundButton';

describe('<RoundButton />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<RoundButton
      text="add"
      color="red"
      small
    />);
  });
});
