import React from 'react';
import TopBar from '../TopBar';
import Tabs from './Tabs';
import RowHeader from './RowHeader';
import Column from './Column';
import Row from './Row';
import capitalizeString from '../../../utils/capitalizeString';

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

const Entries = ({ entries = entriesExample, headers, onSelected, onDelete }) =>
<div>
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
