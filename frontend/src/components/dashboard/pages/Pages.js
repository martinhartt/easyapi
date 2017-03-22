import React from 'react';
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
  }
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
]

const Pages = ({ name, pages = pagesExamples, isCreating = true }) => <div style={style.base}>
  <TopBar name={name} />
  {isCreating && <div style={style.page}>
    <div style={style.label}>Path:</div>
    <div style={style.field}>
      <TextInput name="path" placeholder="Path" />
    </div>
    <div style={style.label}>Method:</div>
    <div style={style.field}>
      <TextInput name="method" placeholder="Method" />
    </div>
    <div style={style.label}>Operation:</div>
    <div style={style.field}>
      <TextInput name="operation" placeholder="Operation" />
    </div>
    <div style={style.label}>Model:</div>
    <div style={style.field}>
      <TextInput name="model" placeholder="Model" />
    </div>
    <div style={style.field}>
      <Button text="Create" />
    </div>
  </div>}
  {pages.map(page => <div style={style.page}>
    <h3 style={style.title}><span style={style.method}>{page.method}</span> {page.path}</h3>
    <p style={style.description}>For the model {page.model}, it will {page.operation}</p>

  </div>)}
</div>;

export default Pages;
