import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../TopBar';
import { Color } from '../../StyleConstant';
import TextInput from '../../TextInput';
import Button from '../../Button';

const style = {
  base: {
    backgroundColor: Color.lighterGrey,
    height: '100vh',
    overflowY: 'auto',
  },
  page: {
    backgroundColor: Color.whiteText,
    margin: 20,
    padding: 15,
    borderRadius: 5,
    border: `2px solid ${Color.lightGrey}`,
  },
  title: {
    margin: 0,
    padding: 0,
    fontWeight: 600,
  },
  method: {
    color: Color.green,
  },
  description: {
    padding: 0,
    marginBottom: 0,
  },
  label: {
  },
  field: {
    marginBottom: 10,
    marginTop: 4,
  },
};


const pagesExamples = [
  {
    method: 'GET',
    path: '/owners',
    operation: 'find',
    model: 'owners',
  },
  {
    method: 'GET',
    path: '/pets/{id}',
    operation: 'findById',
    model: 'pets',
  },
];

function bind(model, action, onChange) {
  const name = `${model.name}`;
  const prop = `${action.prop}`;
  console.log('bind', name, prop);
  return console.log.bind(console, name, prop);// onChange(name, { [prop]: !!e.target.checked });
}

const Pages = ({ name, models = [], actions = [], onChange, urlPrefix }) => <div style={style.base}>
  <TopBar name={name} />
  {models.map((model, modelIndex) => <div style={style.page}>
    <h3 style={style.title}>{model.name}</h3>
    {actions.map(action => (
      <div>
        <input
          id={action}
          type="checkbox"
          checked={model[action.prop].value === true}
          onChange={bind(model, action)}
        />
        <label
          htmlFor={action}
          style={style.label}
        >
          {action.label} ({action.method} {urlPrefix}{model.name})
        </label>
      </div>
    ))}
  </div>)}
</div>;

Pages.propTypes = {
  name: PropTypes.string,
  models: PropTypes.array,
  actions: PropTypes.array,
  onChange: PropTypes.func,
  urlPrefix: PropTypes.string,
};

export default Pages;
