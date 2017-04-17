import React from 'react';
import PropTypes from 'prop-types';
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
    overflowX: 'auto',
  },
  main: {
    height: 'calc(100vh - 77px)',
    overflowY: 'auto',
  },
};

const Entries = ({ name, entries = [], attributes = [], headers = [], onSelected, onDelete, onCreate, onUpdate }) =>
  <div style={style.base}>
    <TopBar name={name} onNew={() => onCreate()} />
    <div style={style.main}>
      <Tabs headers={headers} onSelected={onSelected} />
      <RowHeader>
        <Column key="headerid" value="ID" first />
        {attributes.map(attr => <Column value={capitalizeString(attr.name)} key={`${attr.id}rowheader`} />)}
      </RowHeader>

      {entries.map(entry =>
        <Row key={`${entry.id}row`} onDelete={() => onDelete(entry.realId)}>
          <Column key={`${entry.id}column`} value={entry.id} first />

          {attributes.map(attr =>
            <Column
              key={`column${entry.realId}x${attr.id}`}
              type={attr.type}
              value={entry[attr.name] ? entry[attr.name].value : ''}
              isItem
              onChange={e => onUpdate(entry.realId, attr.id, e.target.value, entry[attr.name] && entry[attr.name].id)}
            />)}
        </Row>,
      )}
    </div>
  </div>;

Entries.propTypes = {
  name: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
  attributes: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  onSelected: PropTypes.func,
  onDelete: PropTypes.func,
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default Entries;
