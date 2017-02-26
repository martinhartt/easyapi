import React, { PropTypes } from 'react';
import Radium from 'radium';
import Frame from './Frame';
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
  }
}

const ServiceList = ({ services , onSelect, onCreate }) => (
  <Frame>
    <p style={style.p}>Which API would you like to work on?</p>
    <div style={style.list}>
      {services.map(service => <ServiceListItem service={service} />)}
      <RoundButton text="+" onClick={onCreate} />
    </div>
  </Frame>
);

ServiceList.propTypes = {
  services: PropTypes.array,
};

/* eslint-disable new-cap */
export default Radium(ServiceList);
