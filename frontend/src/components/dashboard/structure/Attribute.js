import React from 'react';
import Radium from 'radium';
import capitalizeString from '../../../utils/capitalizeString';
import { Color } from '../../StyleConstant';

const style = {
  base: {
    backgroundColor: Color.lighterGrey,
    marginBottom: 4,
    borderRadius: 3,
    padding: '5px 9px',
    cursor: 'pointer',
    transition: '0.3s all',
    ':hover': {
      backgroundColor: Color.lightGrey,
    }
  }
}

const prettify = string => capitalizeString(string.replace('_', ' '));

const Attribute = ({ attribute, onClick }) => <div style={style.base}>
  {prettify(attribute.name)}
</div>

export default Radium(Attribute);
