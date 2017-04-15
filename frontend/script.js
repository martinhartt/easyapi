
const fileNames = [{ name: 'AuthForm', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/AuthForm.test.js' },
{ name: 'Button', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/Button.test.js' },
{ name: 'About', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/about/About.test.js' },
{ name: 'Dashboard', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/Dashboard.test.js' },
{ name: 'Column', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/entries/Column.test.js' },
{ name: 'Entries', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/entries/Entries.test.js' },
{ name: 'Row', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/entries/Row.test.js' },
{ name: 'RowHeader', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/entries/RowHeader.test.js' },
{ name: 'Tabs', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/entries/Tabs.test.js' },
{ name: 'Pages', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/pages/Pages.test.js' },
{ name: 'Sidebar', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/Sidebar.test.js' },
{ name: 'SidebarItem', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/SidebarItem.test.js' },
{ name: 'Attribute', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/structure/Attribute.test.js' },
{ name: 'DialogBox', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/structure/DialogBox.test.js' },
{ name: 'Model', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/structure/Model.test.js' },
{ name: 'Structure', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/structure/Structure.test.js' },
{ name: 'TopBar', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/dashboard/TopBar.test.js' },
{ name: 'Frame', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/Frame.test.js' },
{ name: 'HomePage', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/HomePage.test.js' },
{ name: 'Logo', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/Logo.test.js' },
{ name: 'MethodButton', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/MethodButton.test.js' },
{ name: 'RoundButton', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/RoundButton.test.js' },
{ name: 'ServiceList', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/ServiceList.test.js' },
{ name: 'Setup', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/setup/Setup.test.js' },
{ name: 'SetupMethod', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/setup/SetupMethod.test.js' },
{ name: 'SetupName', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/setup/SetupName.test.js' },
{ name: 'SetupNatural', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/setup/SetupNatural.test.js' },
{ name: 'SetupSpreadsheet', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/setup/SetupSpreadsheet.test.js' },
{ name: 'StyleConstant', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/StyleConstant.test.js' },
{ name: 'TextInput', path: '/Users/martinkubat/Work/easyapi/frontend/src/components/TextInput.test.js' },
{ name: 'AuthFormContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/AuthFormContainer.test.js' },
{ name: 'SidebarContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/dashboard/SidebarContainer.test.js' },
{ name: 'SetupContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/setup/SetupContainer.test.js' },
{ name: 'SetupMethodContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/setup/SetupMethodContainer.test.js' },
{ name: 'SetupNameContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/setup/SetupNameContainer.test.js' },
{ name: 'SetupNaturalContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/setup/SetupNaturalContainer.test.js' },
{ name: 'SetupSpreadsheetContainer', path: '/Users/martinkubat/Work/easyapi/frontend/src/containers/setup/SetupSpreadsheetContainer.test.js' }];

const generateFile = name => `
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ${name} from './${name}';

describe('<${name} />', () => {
  it('renders the component correcty', () => {
    const wrapper = shallow(<${name} />);

  });
});
`;

const fs = require('fs');

fileNames.forEach((f) => {
  fs.writeFileSync(f.path, generateFile(f.name));
});
