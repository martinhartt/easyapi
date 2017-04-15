import React from 'react';
import PropTypes from 'prop-types';
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

const ServiceList = ({ services = [], onSelect, onCreate, onReady }) => (
  <div>
    {onReady()}
    <p style={style.p}>Which API would you like to work on?</p>
    <div style={style.list}>
      {services.map(service => <ServiceListItem key={`si-${service.id}`} onClick={() => onSelect(service.id)} service={service} />)}
      <RoundButton text="add" onClick={onCreate} />
    </div>
  </div>
);

ServiceList.propTypes = {
  services: PropTypes.array,
  onSelect: PropTypes.func,
  onCreate: PropTypes.func,
  onReady: PropTypes.func,
};

/* eslint-disable new-cap */
export default Radium(ServiceList);
