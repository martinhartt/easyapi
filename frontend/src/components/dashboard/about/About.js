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
  },
};

const metaExample = {
  name: 'Pets',
  url: 'pets',
  author: 'Martin Hartt',
  isPublic: false,
};

const About = ({ name, meta = metaExample, onChange }) => <div>
  <TopBar name={name} />
  <div style={style.base}>
    <h3 style={style.h3}>About</h3>
    {
      Object.keys(meta).map(key =>
        (typeof (meta[key].value) === 'boolean') ?
          <div>
            <input id={key} type="checkbox" checked={meta[key].value === true} onChange={e => onChange({ [key]: !!e.target.checked })} />
            <label htmlFor={key} style={style.label}>{key}</label>
          </div>
                 :
          <div>
            <label style={style.label} htmlFor={key}>{meta[key].label}</label>
            <div style={style.field}>
              <TextInput id={key} text={meta[key].value} onChange={value => onChange({ [key]: value })} />
            </div>
          </div>,

      )
    }

  </div>
</div>;

export default About;
