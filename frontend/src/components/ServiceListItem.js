import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Color, Dimensions } from './StyleConstant';

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
  },
};

const ServiceListItem = ({ service, onClick }) => <div style={style} onClick={onClick}>
  {service && service.name}
</div>;

ServiceListItem.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default Radium(ServiceListItem);
