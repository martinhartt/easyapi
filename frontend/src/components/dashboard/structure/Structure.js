import React from 'react';
import Radium from 'radium';
import Model from './Model';
import TopBar from '../TopBar';
import DialogBox from './DialogBox';
import { lightBorder, Color } from '../../StyleConstant';

const style = {
  main: {
    backgroundColor: Color.lighterGrey,
    height: 'calc(100vh - 97px)',
    padding: 10,
    overflowY: 'auto',
  },
  model: {

  },
  newModel: {
    textAlign: 'center',
    backgroundColor: 'white',
    border: '2px solid rgba(198, 198, 198, 0.34)',
    borderRadius: 3,
    width: 250,
    padding: 5,
    paddingBottom: 10,
    fontSize: 27,
    cursor: 'pointer',
    color: 'black',
    transition: '0.5s all',
    ':hover': {
      border: '2px solid rgba(198, 198, 198, 0.8)',
    },
  },
};

const attributes = [
  {
    value: 'name',
    label: 'Name',
    type: 'string',
  },
  {
    value: 'type',
    label: 'Type',
    type: 'enum',
    options: ['string', 'integer', 'float'],
  },
  {
    value: 'multiple',
    label: 'Multiple',
    type: 'boolean',
  },
  {
    value: 'required',
    label: 'Required',
    type: 'boolean',
  },
];

const Structure = ({
  name,
  params,
  models = [],
  selectedAttribute,
  onSelectAttribute = console.log,
  onModelCreate = console.log,
  onModelDelete = console.log.bind(null, 'delete'),
  onModelChange = console.log,
  onAttributeCreate = console.log,
  onAttributeDelete = console.log,
  onAttributeChange = console.log,
}) => <div style={style.base}>
  <TopBar name={name} onNew={() => onModelCreate()} />
  {selectedAttribute && <DialogBox
    name={selectedAttribute.name}
    object={selectedAttribute}
    attributes={attributes}
    onChange={changes => onAttributeChange(selectedAttribute.id, changes)}
    onDelete={() => onAttributeDelete(selectedAttribute.id)}
    onClose={() => onSelectAttribute(undefined)}
  />}
  <div style={style.main}>
    {models.map(model =>
      <Model key={`model-${model.id}`} onChange={onModelChange} onDelete={onModelDelete} onAttributeCreate={onAttributeCreate} onClickAttribute={onSelectAttribute} model={model} />,
    )}
  </div>
</div>;

export default Radium(Structure);
