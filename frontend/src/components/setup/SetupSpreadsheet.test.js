
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SetupSpreadsheet from './SetupSpreadsheet';

describe('<SetupSpreadsheet />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<SetupSpreadsheet
      preview={[]}
      nextEnabled={false}
    />);
  });
});
