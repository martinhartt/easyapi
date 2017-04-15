
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import createMethods from '../../utils/createMethods';

const {
  naturalLanguage,
  spreadsheet,
} = createMethods;

import SetupMethod from './SetupMethod';

describe('<SetupMethod />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<SetupMethod
      method={naturalLanguage}
    />);
  });
});
