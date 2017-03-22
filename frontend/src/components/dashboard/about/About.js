import React from 'react';
import TopBar from '../TopBar';
import { Color } from '../../StyleConstant';
import TextInput from '../../TextInput';
import Button from '../../Button';

const style = {
  base: {
    height: '100vh',
    overflowY: 'auto',
    padding: 30,
  },
  h3: {
    padding: 0,
    margin: 0,
  },
  label: {
    marginTop: 10,
  },
  field: {
    marginBottom: 10,
    marginTop: 4,
  }
}

const metaExample = {
  name: 'Pets',
}

const About = ({ name, meta = metaExample, onChange }) => <div>
  <TopBar name={name} />
  <div style={style.base}>
    <h3 style={style.h3}>About</h3>
    <div style={style.label}>Name</div>
    <div style={style.field}><TextInput text={meta.name} onChange={(value) => onChange({name: value})}/></div>
  </div>
</div>;

export default About;
