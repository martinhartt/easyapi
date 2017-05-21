import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Button from '../Button';
import TextInput from '../TextInput';
import Model from '../dashboard/structure/Model';

const styles = {
  nextButton: {
    marginTop: 100,
    float: 'right',
  },
  field: {
    width: 850,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: 100,
  },
  preview: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    marginTop: 10,
  },
};


const SetupNatural = ({ text, onChange, onDone, preview, nextEnabled }) => (
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
      <div style={styles.preview}>
        {preview && preview.map(a => <Model enableInteractions={false} model={a} />)}
      </div>
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
  preview: PropTypes.array,
  nextEnabled: PropTypes.bool,
};

/* eslint-disable new-cap */
export default Radium(SetupNatural);
