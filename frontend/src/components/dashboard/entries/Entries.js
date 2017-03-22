import React from 'react';
import TopBar from '../TopBar';
import Tabs from './Tabs';
import RowHeader from './RowHeader';
import Column from './Column';
import Row from './Row';
import capitalizeString from '../../../utils/capitalizeString';
import { Color } from '../../StyleConstant';

const entriesExample = {
  attributes: [
    'id',
    'name',
    'breed',
    'owner',
  ],
  values: [
    {
      id: 1,
      name: 'Spot',
      breed: 'Bulldog',
      owner: 'Martin',
    },
    {
      id: 2,
      name: 'Max',
      breed: 'Bulldog',
      owner: 'Jon Snow',
    },
  ]
};

const exampleHeaders = [
  {
    text: 'Pets',
    selected: true,
  },
  {
    text: 'Owners',
  },
]

const style = {
  base: {
    backgroundColor: Color.lighterGrey,
    height: '100vh',
  }
}

const Entries = ({ entries = entriesExample, headers = exampleHeaders, onSelected, onDelete }) =>
<div style={style.base}>
  <TopBar name="OK" />
  <Tabs headers={headers} onSelected={onSelected} />
  <RowHeader>
    {entries.attributes.map(attr => <Column value={capitalizeString(attr)} key={attr} />)}
  </RowHeader>
  {entries.values.map(entry =>
    <Row key={entry.id}>
      {entries.attributes.map(attr => <Column key={entry.id+attr} value={entry[attr]} />)}
    </Row>
  )}
</div>;

export default Entries;
