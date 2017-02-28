import React from 'react';
import Logo from '../Logo';
import Sidebar from './Sidebar';
import { Color, lightBorder } from '../StyleConstant';


const style = {
  base: {
    display: 'flex',
  },
  sidebar: {
    width: 230,
    borderRight: lightBorder,
    height: '100vh',
  },
  main: {
    flex: 1,
  },
  logo: {
    textAlign: 'center',
    padding: '20px 0',
    borderBottom: lightBorder,
  }
}

const Dashboard = ({ params, children }) => <div style={style.base}>
  <div style={style.sidebar}>
    <div style={style.logo}>
      <Logo />
    </div>
    <Sidebar />
  </div>
  <div style={style.main}>
    {children}
  </div>
</div>;

export default Dashboard;
