import React from 'react';
import Radium from 'radium';
import Attribute from './Attribute';
import { Color } from '../../StyleConstant';
import capitalizeString from '../../../utils/capitalizeString';

const style = {
  base: {
    backgroundColor: Color.white,
    background: '#FFFFFF',
    border: `2px solid ${Color.grey}`,
    borderRadius: 3,
    marginBottom: 10,
    width: 250,
    padding: 5,
  },
  title: {
    margin: 0,
    padding: '5px 10px',
    fontWeight: 600,
    textAlign: 'center',
  }
};

const Model = ({ model }) => <div style={style.base}>
  <h3 style={style.title}>{capitalizeString(model.name)}</h3>
  {model.properties.map(attribute => <Attribute attribute={attribute} />)}
</div>;

export default Radium(Model);
