
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import DialogBox from './DialogBox';

describe('<DialogBox />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<DialogBox
      name="Example"
      object={{}}
      attributes={[]}
    />);
  });
});
