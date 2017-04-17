import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Button from '../Button';
import TextInput from '../TextInput';
import capitalizeString from '../../utils/capitalizeString';
import Dropzone from 'react-dropzone';
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
  sheet: {
    width: '100%',
    height: 300,
    border: '2px solid gray',
    borderRadius: 5,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
};

const SetupSpreadsheet = ({ onChange, onDone, preview, nextEnabled }) => (
  <div>
    <div style={styles.field}>
      <div>
        <Dropzone onDrop={onChange} style={styles.sheet}>
          Drop a spreadsheet into this area
        </Dropzone>
      </div>
      {preview && preview.map(a => <Model enableInteractions={false} model={a} />)}
    </div>
    <div style={styles.nextButton} >
      <Button isDisabled={!nextEnabled} onClick={onDone} text="Next" />
    </div>
  </div>
);

SetupSpreadsheet.propTypes = {
  onChange: PropTypes.func,
  onDone: PropTypes.func,
  preview: PropTypes.array,
  nextEnabled: PropTypes.bool,
};

/* eslint-disable new-cap */
export default Radium(SetupSpreadsheet);
