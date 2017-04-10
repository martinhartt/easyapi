import React from 'react';
import Radium from 'radium';
import Model from './Model';
import TopBar from '../TopBar';
import Modal from './Modal';
import { lightBorder, Color } from '../../StyleConstant';

const style = {
  main: {
    backgroundColor: Color.lighterGrey,
    height: 'calc(100vh - 77px)',
    padding: 10,
  },
  model: {

  },
};

const exampleModels = [
  {
    name: 'pet',
    raw: 'pet',
    attributes: [
      {
        type: 'string',
        name: 'name',
        raw: 'name',
        lemma: 'name',
        required: false,
        multiple: false,
      },
      {
        type: 'string',
        name: 'breed',
        raw: 'breed',
        lemma: 'breed',
        required: false,
        multiple: false,
      },
      {
        type: 'Owner',
        name: 'owner',
        raw: 'owner',
        lemma: 'owner',
        required: false,
        multiple: false,
      },
      {
        type: 'Toy',
        name: 'likes_toy',
        raw: 'toy',
        lemma: 'toy',
        required: false,
        multiple: false,
      },
    ],
  },
  {
    name: 'owner',
    raw: 'Owner',
    attributes: [
      {
        type: 'string',
        name: 'name',
        raw: 'name',
        lemma: 'name',
        required: false,
        multiple: false,
      },
      {
        type: 'Pet',
        name: 'owns_pet',
        raw: 'pet',
        lemma: 'pet',
        required: false,
        multiple: false,
      },
    ],
  },
  {
    name: 'toy',
    raw: 'Toy',
    attributes: [
      {
        type: 'string',
        name: 'name',
        raw: 'name',
        lemma: 'name',
        required: false,
        multiple: false,
      },
    ],
  },
];

const exampleAttribute = {
  name: 'attribute',
  type: 'string',
  required: true,
  multiple: false,
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
    type: 'string',
  },
  {
    value: 'multiple',
    label: 'Multiple',
    type: 'boolean',
  },
  {
    value: 'required',
    label: 'Required',
    type: 'booleanonSelectAttribute = console.log, ',
  },
];

const Structure = ({ name, params, models = [], selectedAttribute, onSelectAttribute = console.log, onCreate, onDelete }) => <div style={style.base}>
  <TopBar name={name} onNew={onCreate} />
  {selectedAttribute && <Modal name={selectedAttribute.name} object={selectedAttribute} attributes={attributes} onClose={() => onSelectAttribute(undefined)} />}
  <div style={style.main}>
    {models.map(model =>
      <Model key={`model-${model.id}`} onClickAttribute={onSelectAttribute} model={model} />,
    )}
  </div>
</div>;

export default Radium(Structure);
