import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Attribute from './Attribute';
import { Color } from '../../StyleConstant';
import capitalizeString from '../../../utils/capitalizeString';
import RoundButton from '../../RoundButton';

const style = {
  base: {
    backgroundColor: Color.white,
    background: '#FFFFFF',
    border: `2px solid ${Color.grey}`,
    borderRadius: 3,
    marginBottom: 10,
    width: 250,
    padding: 5,
    position: 'relative',
    zIndex: 0,
    marginRight: 10,
  },
  title: {
    margin: 0,
    padding: '5px 0px',
    textAlign: 'center',
    borderRadius: 3,
    ':hover': {
      backgroundColor: '#EEE',
    },
    border: 'none',
    ':focus': {
      outline: 0,
      border: 0,
    },
    fontSize: 20,
    width: '100%',
  },
  close: {
    position: 'absolute',
    top: 8,
    right: 6,
  },
  attributes: {
    marginTop: 10,
  },
  newAttribute: {
    textAlign: 'center',
    backgroundColor: '#EEE',
    margin: '6px 0',
    borderRadius: 3,
    padding: '5px 9px',
    cursor: 'pointer',
    color: 'black',
    transition: '0.5s all',
    fontSize: 18,
    ':hover': {
      backgroundColor: '#DDD',
    },
  },
};

const Model = ({ model, onClickAttribute, onDelete, onChange, onAttributeCreate, enableInteractions = true }) => <div style={style.base}>
  <input disabled={!enableInteractions} style={[style.title]} value={capitalizeString(model.name)} onChange={e => onChange(model.id, e.target.value)} />
  <div style={style.close}>
    {enableInteractions && <RoundButton text="remove" onClick={() => onDelete(model.id)} color={Color.red} small />}
  </div>
  <div style={style.attributes}>
    {model.attributes && model.attributes.map(attribute =>
      <Attribute
        key={`attr-${attribute.name}-${attribute.id}`}
        onClick={() => enableInteractions && onClickAttribute(attribute.id)}
        attribute={attribute}
        enableInteractions={enableInteractions}
      />)}
    {enableInteractions && <div key="newAttribute" style={style.newAttribute} onClick={() => onAttributeCreate(model.id)}>+</div>}
  </div>
</div>;

Model.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    attributes: PropTypes.array,
  }).isRequired,
  onClickAttribute: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
  onAttributeCreate: PropTypes.func,
  enableInteractions: PropTypes.bool,
};

export default Radium(Model);
