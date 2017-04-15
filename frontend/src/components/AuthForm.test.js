
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AuthForm from './AuthForm';

describe('<AuthForm />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<AuthForm
      errors={[]}
      username="username"
      password="password"
    />);
  });
});
