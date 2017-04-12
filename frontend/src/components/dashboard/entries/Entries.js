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
  },
  main: {
    height: 'calc(100vh - 77px)',
    overflowY: 'auto',
  },
};


function decode(string, type) {
  switch (type) {
    case 'integer':
      return parseInt(string, 10);
    case 'float':
      return parseFloat(string);
    default:
      return string;
  }
}

const Entries = ({ name, entries = [], attributes = [], headers = [], onSelected, onDelete, onCreate, onUpdate }) =>
  <div style={style.base}>
    <TopBar name={name} onNew={() => onCreate()} />
    <div style={style.main}>
      <Tabs headers={headers} onSelected={onSelected} />
      <RowHeader>
        <Column key="headerid" value="ID" first />
        {attributes.map(attr => <Column value={capitalizeString(attr.name)} key={attr.id} />)}
      </RowHeader>
      {entries.map(entry =>
        <Row key={entry.id} onDelete={() => onDelete(entry.realId)}>
          <Column key={`${entry.id}.id`} value={entry.id} first />

          {attributes.map(attr =>
            <Column
              key={`${entry.realId}.${attr.id}`}
              value={decode(entry[attr.name].value, attr.type)}
              isItem
              onChange={e => onUpdate(entry.realId, attr.id, e.target.value, entry[attr.name].id)}
            />)}
        </Row>,
      )}
    </div>
  </div>;

export default Entries;
