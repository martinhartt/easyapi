
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Row from './Row';

describe('<Row />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Row>
      <p>Hello</p>
    </Row>);
  });
});
