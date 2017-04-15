
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Attribute from './Attribute';

describe('<Attribute />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Attribute
      attribute={{
        name: 'Attribute',
        multiple: true,
      }}
      enableInteractions
    />);
  });
});
