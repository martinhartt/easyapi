
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import createMethods from '../utils/createMethods';

const {
  naturalLanguage,
} = createMethods;

import MethodButton from './MethodButton';

describe('<MethodButton />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<MethodButton
      method={naturalLanguage}
      isSelected
    />);
  });
});
