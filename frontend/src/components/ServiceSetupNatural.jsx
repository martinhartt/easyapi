import React, { PropTypes } from 'react';
import Radium from 'radium';
import Button from './Button';
import TextInput from './TextInput';
import capitalizeString from '../utils/capitalizeString';

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
  }
}

function formatAnnotations(annotations = []) {
  let html = '';
  for (const entity of annotations) {
    html += `${capitalizeString(entity.name)}(`;
    const props = [];
    for (const property of entity.properties) {
      const required = (property.required !== true) ? '?' : '';
      const multiple = property.multiple;
      props.push(`${property.name}: ${multiple ? '[' : ''}${property.type}${multiple ? ']' : ''}${required}`);
    }
    html += props.join(', ');
    html += ')<br />'
  }
  return { '__html': html };
}

const ServiceSetupNatural = ({ text, onChange, onDone, annotations }) => (
  <div>
    <div style={styles.field}>
      <p>Please describe the various things and entities, <br />along with their properties and relationships</p>
      <div>
        <TextInput
          text={text}
          onChange={onChange}
          long={true}
          />
      </div>
      <p dangerouslySetInnerHTML={formatAnnotations(annotations)}></p>
    </div>
    <div style={styles.nextButton} >
      <Button isDisabled={!text || !text.length} onClick={onDone} text="Next" />
    </div>
  </div>
);

ServiceSetupNatural.PropTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onDone: PropTypes.func,
};

/* eslint-disable new-cap */
export default Radium(ServiceSetupNatural);
