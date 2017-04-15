
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import RowHeader from './RowHeader';

describe('<RowHeader />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<RowHeader>
      <p>Test</p>
    </RowHeader>);
  });
});
