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
  },
};

const Modal = ({ name, object, attributes, onChange, onClose }) => <div style={style}>
  <div style={style.close} onClick={onClose} />
  <h3>{name && capitalizeString(name)}</h3>
  {attributes.map(attr =>
    <div key={attr.value}>
      <label htmlFor={attr.value}>{attr.label}</label>
      <TextInput text={object[attr.value]} onChange={val => onChange({ [attr.value]: val })} />
    </div>,
  )}

</div>;

export default Modal;
