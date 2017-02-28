import React from 'react';
import { Color, lightBorder } from '../../StyleConstant';
import TextInput from '../../TextInput';
import capitalizeString from '../../../utils/capitalizeString';

const style = {
  width: 400,
  height: 400,
  position: 'absolute',
  backgroundColor: Color.whiteText,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: lightBorder,
  borderRadius: 3,
  padding: 10,
  close: {
    width: 30,
    height: 30,
    backgroundColor: Color.grey,
    position: 'absolute',
    right: 10,
    cursor: 'pointer',
  }
}

const AttributeModal = ({ attribute, onChange, onClose }) => <div style={style}>
  <div style={style.close} onClick={onClose} />
  <h3>{capitalizeString(attribute.name)}</h3>
  <p>Name</p>
  <TextInput text={attribute.name} onChange={val => onChange({ name: 'name', val })} />
  <p>Example</p>
  <TextInput text={attribute.type} />
</div>;

export default AttributeModal;
