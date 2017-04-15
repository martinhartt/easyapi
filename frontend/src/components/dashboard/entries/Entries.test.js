
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Entries from './Entries';

describe('<Entries />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Entries
      name="Example"
      entries={[]}
      attributes={[]}
      headers={[]}
      onSelected={false}
    />);
  });
});
