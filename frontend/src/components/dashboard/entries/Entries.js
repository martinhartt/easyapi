import React from 'react';
import TopBar from '../TopBar';
import Tabs from './Tabs';
import RowHeader from './RowHeader';
import Column from './Column';
import Row from './Row';
import capitalizeString from '../../../utils/capitalizeString';
import { Color } from '../../StyleConstant';

const entriesExample = [
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
];

const exampleHeaders = [
  {
    text: 'Pets',
    selected: true,
  },
  {
    text: 'Owners',
  },
];

const style = {
  base: {
    backgroundColor: Color.lighterGrey,
    height: '100vh',
  },
};

const Entries = ({ entries = [], attributes = [], headers = [], onSelected, onDelete, onCreate, onUpdate }) =>
  <div style={style.base}>
    <TopBar name="OK" onNew={() => onCreate()} />
    <Tabs headers={headers} onSelected={onSelected} />
    <RowHeader>
      {attributes.map(attr => <Column value={capitalizeString(attr.name)} key={attr.id} />)}
    </RowHeader>
    {entries.map(entry =>
      <Row key={entry.id} onDelete={() => onDelete(entry.realId)}>
        {attributes.map(attr => <Column key={entry.id + attr.id} value={entry[attr.name]} isItem onChange={e => onUpdate(entry.realId, attr.id, e.target.value)} />)}
      </Row>,
  )}
  </div>;

export default Entries;
