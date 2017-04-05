import React, { PropTypes } from 'react';
import Radium from 'radium';
import RoundButton from './RoundButton';
import ServiceListItem from './ServiceListItem';

const style = {
  p: {
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const ServiceList = ({ services, onSelect, onCreate }) => (
  <div>
    <p style={style.p}>Which API would you like to work on?</p>
    <div style={style.list}>
      {services.map(service => <ServiceListItem onClick={() => onSelect(service.id)} service={service} />)}
      <RoundButton text="+" onClick={onCreate} />
    </div>
  </div>
);

ServiceList.propTypes = {
  services: PropTypes.array,
};

/* eslint-disable new-cap */
export default Radium(ServiceList);
