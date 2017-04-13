import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import MethodButton from '../MethodButton';
import Button from '../Button';
import createMethods from '../../utils/createMethods';

const {
  naturalLanguage,
  spreadsheet,
} = createMethods;


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
  methods: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const SetupMethod = ({ method, onChange, onDone }) => (
  <div>
    <div style={styles.field}>
      <p>How do you want to create your API?</p>
      <div style={styles.methods}>
        <MethodButton
          method={naturalLanguage}
          isSelected={method === naturalLanguage}
          onClick={() => onChange(naturalLanguage)}
        />
        <MethodButton
          method={spreadsheet}
          isSelected={method === spreadsheet}
          onClick={() => onChange(spreadsheet)}
        />
      </div>
    </div>
    <div style={styles.nextButton} >
      <Button isDisabled={!method} onClick={onDone} text="Next" />
    </div>
  </div>
);

SetupMethod.propTypes = {
  method: PropTypes.string,
  onChange: PropTypes.func,
  onDone: PropTypes.func,
};

/* eslint-disable new-cap */
export default Radium(SetupMethod);
