import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Button from '../Button';
import TextInput from '../TextInput';
import capitalizeString from '../../utils/capitalizeString';
import Model from '../dashboard/structure/Model';

const styles = {
  nextButton: {
    marginTop: 100,
    float: 'right',
  },
  field: {
    width: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: 100,
  },
};

function formatAnnotations(annotations = []) {
  let html = '';
  for (const entity of annotations) {
    html += `${capitalizeString(entity.name)}(`;
    const props = [];
    for (const property of entity.attributes) {
      const required = (property.required !== true) ? '?' : '';
      const multiple = property.multiple;
      props.push(`${property.name}: ${multiple ? '[' : ''}${property.type}${multiple ? ']' : ''}${required}`);
    }
    html += props.join(', ');
    html += ')<br />';
  }
  return { __html: html };
}

const SetupNatural = ({ text, onChange, onDone, annotations, nextEnabled }) => (
  <div>
    <div style={styles.field}>
      <p>Please describe the various things and entities, <br />along with their properties and relationships</p>
      <div>
        <TextInput
          text={text}
          onChange={onChange}
          long
        />
      </div>
      {annotations && annotations.map(a => <Model enableInteractions={false} model={a} />)}
      {/* <p dangerouslySetInnerHTML={formatAnnotations(annotations)} /> */}
    </div>
    <div style={styles.nextButton} >
      <Button isDisabled={!nextEnabled} onClick={onDone} text="Next" />
    </div>
  </div>
);

SetupNatural.PropTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onDone: PropTypes.func,
  annotations: PropTypes.array,
  nextEnabled: PropTypes.bool,
};

/* eslint-disable new-cap */
export default Radium(SetupNatural);
