import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import TextInput from '../TextInput';
import Button from '../Button';

const styles = {
  nextButton: {
    marginTop: 100,
    float: 'right',
  },
  field: {
    width: 500,
    margin: 'auto',
    textAlign: 'center',
    marginTop: 100,
  },
};

const SetupMethod = ({ name, onChange, onDone }) => (
  <div>
    <div style={styles.field}>
      <p>What is the name of your API?</p>
      <TextInput placeholder={'Name'} text={name} onChange={onChange} />
    </div>
    <div style={styles.nextButton}>
      <Button onClick={onDone} text="Next" isDisabled={!name || !name.length} />
    </div>
  </div>
);

SetupMethod.PropTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  onDone: PropTypes.func,
};

/* eslint-disable new-cap */
export default Radium(SetupMethod);
