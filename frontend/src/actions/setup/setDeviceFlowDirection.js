// @flow

export const SET_DEVICE_FLOW_DIRECTION = 'SET_DEVICE_FLOW_DIRECTION';

type deviceFlowDirection = 'query' | 'webhook';

export function setDeviceFlowDirection(direction: deviceFlowDirection) {
  return {
    type: SET_DEVICE_FLOW_DIRECTION,
    direction,
  };
}
