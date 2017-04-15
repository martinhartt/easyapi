
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ServiceList from './ServiceList';

describe('<ServiceList />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<ServiceList
      services={[]}
    />);
  });
});
