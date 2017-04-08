import React from 'react';
import TopBar from '../TopBar';
import Tabs from './Tabs';
import RowHeader from './RowHeader';
import Column from './Column';
import Row from './Row';
import capitalizeString from '../../../utils/capitalizeString';
import { Color } from '../../StyleConstant';

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
      <Column key="headerid" value="ID" />
      {attributes.map(attr => <Column value={capitalizeString(attr.name)} key={attr.id} />)}
    </RowHeader>
    {entries.map(entry =>
      <Row key={entry.id} onDelete={() => onDelete(entry.realId)}>
        <Column key={`${entry.id}.id`} value={entry.id} />

        {attributes.map(attr => <Column key={`${entry.realId}.${attr.id}`} value={entry[attr.name].value} isItem onChange={e => onUpdate(entry.realId, attr.id, e.target.value, entry[attr.name].id)} />)}
      </Row>,
  )}
  </div>;

export default Entries;
