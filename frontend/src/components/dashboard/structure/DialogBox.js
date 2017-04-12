import React from 'react';
import { Color, lightBorder } from '../../StyleConstant';
import TextInput from '../../TextInput';
import capitalizeString from '../../../utils/capitalizeString';

const style = {
  base: {
    width: 400,
    height: 400,
    position: 'absolute',
    backgroundColor: Color.whiteText,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 3,
    padding: 15,
    zIndex: 50,
  },
  close: {
    width: 35,
    height: 35,
    backgroundImage: 'url("/img/cross.png")',
    backgroundSize: 'cover',
    opacity: 0.3,
    position: 'absolute',
    right: 15,
    top: 15,
    cursor: 'pointer',
  },
  title: {
    fontWeight: 400,
    margin: 0,
    marginBottom: 20,
  },
  label: {
    display: 'block',
    marginTop: 10,
    marginBottom: 5,
  },
  cover: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 5,
  },
  delete: {
    width: 200,
    height: 42,
    backgroundColor: Color.red,
    borderRadius: 3,
    color: 'white',
    textAlign: 'center',
    lineHeight: `${42}px`,
    marginTop: 30,
    cursor: 'pointer',
  },
};

function field(attr, object, onChange) {
  switch (attr.type) {
    case 'string': {
      return (
        <div key={attr.value}>
          <label style={style.label} htmlFor={attr.value}>{attr.label}</label>
          <TextInput id={attr.value} text={object[attr.value]} onChange={val => onChange({ [attr.value]: val })} />
        </div>
      );
    }
    case 'integer': {
      return (
        <div key={attr.value}>
          <label style={style.label} htmlFor={attr.value}>{attr.label}</label>
          <TextInput id={attr.value} type="number" text={object[attr.value]} onChange={val => onChange({ [attr.value]: val })} />
        </div>
      );
    }
    case 'enum': {
      return (
        <div key={attr.value}>
          <label style={style.label} htmlFor={attr.value}>{attr.label}</label>
          <select value={object[attr.value]} onChange={e => onChange({ [attr.value]: e.target.value })}>
            {attr.options.map(option =>
              <option value={option}>{capitalizeString(option)}</option>,
            )}
          </select>
        </div>
      );
    }
    case 'boolean': {
      return (
        <div key={attr.value}>
          <label style={[style.label]} htmlFor={attr.value}><input type="checkbox" checked={object[attr.value]} onChange={e => onChange({ [attr.value]: e.target.checked })} />{attr.label}</label>
        </div>
      );
    }
  }
}

const DialogBox = ({ name, object, attributes, onChange, onClose, onDelete }) =>
  <div>
    <div style={style.cover} onClick={onClose} />
    <div style={style.base} onClick={(e) => { e.preventDefault(); }}>
      <div style={style.close} onClick={onClose} />
      <h3 style={style.title}>{name && capitalizeString(name)}</h3>
      {attributes.map(attr => field(attr, object, onChange))}
      <div onClick={onDelete} style={style.delete}>Delete</div>
    </div>
  </div>;

export default DialogBox;
