import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Color } from '../../StyleConstant';
import capitalizeString from '../../../utils/capitalizeString';

const style = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Color.whiteText,
    borderBottom: `2px solid ${Color.lightGrey}`,
  },
  tab: {
    display: 'inline-block',
    cursor: 'pointer',
    minWidth: 100,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '3px solid transparent',
  },
  selected: {
    backgroundColor: Color.lighterGrey,
    borderTop: `3px solid ${Color.green}`,
  },
};

const Tabs = ({ headers, onSelected }) => <div style={style.base}>
  {headers.map(header =>
    <div
      key={header.text}
      style={[style.tab, header.selected && style.selected]}
      onClick={() => onSelected(header.id)}
    >
      {capitalizeString(header.text)}
    </div>)}
</div>;

Tabs.propTypes = {
  headers: PropTypes.array,
};

export default Radium(Tabs);
