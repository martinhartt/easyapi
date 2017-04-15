
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SetupName from './SetupName';

describe('<SetupName />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<SetupName
      name="Example"
    />);
  });
});
