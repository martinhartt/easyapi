
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Column from './Column';

describe('<Column />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Column
      value="Hello"
      isItem
    />);
  });
});
