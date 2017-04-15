
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SetupNatural from './SetupNatural';

describe('<SetupNatural />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<SetupNatural
      text="A dog has a bone."
      preview={[]}
      nextEnabled={false}
    />);
  });
});
