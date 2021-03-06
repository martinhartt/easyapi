import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../TopBar';
import { Color } from '../../StyleConstant';
import TextInput from '../../TextInput';
import Button from '../../Button';
import capitalizeString from '../../../utils/capitalizeString';

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
  action: {
    marginTop: 5,
  },
};


const Pages = ({ name, models = [], actions = [], onChange, urlPrefix }) => <div style={style.base}>
  <TopBar name={name} />
  {models.map((model, modelIndex) => <div style={style.page} key={`${modelIndex}model`}>
    <h3 style={style.title}>{capitalizeString(model.name)}</h3>
    {actions.map(action => (
      <div key={`${action.label} ${model.id}`} style={style.action}>
        <input
          id={`${action.label}-${model.id}`}
          type="checkbox"
          checked={model[action.prop]}
          onChange={e => onChange(model.id, { [action.prop]: e.target.checked })}
        />
        <label
          htmlFor={`${action.label}-${model.id}`}
          style={style.label}
        >
          {action.label}
        </label>
        {model[action.prop] && <p><b style={style.method}>{action.method}</b> {urlPrefix}{model.shortName}{action.suffix}</p>}
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
