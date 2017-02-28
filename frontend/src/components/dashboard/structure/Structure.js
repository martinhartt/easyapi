import React from 'react';
import Radium from 'radium';
import Model from './Model';
import TopBar from '../TopBar';
import AttributeModal from './AttributeModal';
import { lightBorder, Color } from '../../StyleConstant';

const style = {
  main: {
    backgroundColor: Color.lighterGrey,
    height: 'calc(100vh - 77px)',
    padding: 10,
  },
  model: {

  }
}

const exampleModels = [
  {
    "name": "pet",
    "raw": "pet",
    "properties": [
      {
        "type": "string",
        "name": "name",
        "raw": "name",
        "lemma": "name",
        "required": false,
        "multiple": false
      },
      {
        "type": "string",
        "name": "breed",
        "raw": "breed",
        "lemma": "breed",
        "required": false,
        "multiple": false
      },
      {
        "type": "Owner",
        "name": "owner",
        "raw": "owner",
        "lemma": "owner",
        "required": false,
        "multiple": false
      },
      {
        "type": "Toy",
        "name": "likes_toy",
        "raw": "toy",
        "lemma": "toy",
        "required": false,
        "multiple": false
      }
    ]
  },
  {
    "name": "owner",
    "raw": "Owner",
    "properties": [
      {
        "type": "string",
        "name": "name",
        "raw": "name",
        "lemma": "name",
        "required": false,
        "multiple": false
      },
      {
        "type": "Pet",
        "name": "owns_pet",
        "raw": "pet",
        "lemma": "pet",
        "required": false,
        "multiple": false
      }
    ]
  },
  {
    "name": "toy",
    "raw": "Toy",
    "properties": [
      {
        "type": "string",
        "name": "name",
        "raw": "name",
        "lemma": "name",
        "required": false,
        "multiple": false
      }
    ]
  }
];

const exampleAttribute = {
  name: 'attribute',
  type: 'string',
  required: true,
  multiple: false,
}

const Structure = ({ params, models = exampleModels, selectedAttribute }) => <div style={style.base}>
  <TopBar name="Pets" />
  {selectedAttribute && <AttributeModal attribute={selectedAttribute} />}
  <div style={style.main}>
    {models.map(model =>
      <Model model={model} />
    )}
  </div>
</div>;

export default Radium(Structure);
