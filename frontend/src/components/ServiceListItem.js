import React, { PropTypes } from 'react';
import Radium from 'radium';
import StyleConstant from './StyleConstant';

const { Color, Dimensions } = StyleConstant;

const style = {
  marginBottom: 20,
  border: `${Dimensions.borderWidth}px solid ${Color.grey}`,
  borderRadius: 4,
  width: 270,
  height: 60,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: `all ${Dimensions.transitionTime.normal}`,
  ':hover': {
    border: `${Dimensions.borderWidth}px solid ${Color.green}`,
  }
}

const ServiceListItem = ({ service, onClick }) => <div style={style} onClick={onClick}>
  {service.name}
</div>;

export default Radium(ServiceListItem);
