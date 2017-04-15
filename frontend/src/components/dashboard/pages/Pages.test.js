
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Pages from './Pages';

describe('<Pages />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<Pages
      name="Example"
      models={[]}
      actions={[]}
      urlPrefix="example"
    />);
  });
});
