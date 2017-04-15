
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ServiceListItem from './ServiceListItem';

describe('<ServiceListItem />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<ServiceListItem
      service={{
        name: 'Example',
      }}
    />);
  });
});
