// @flow

export const SETUP_DEVICE_QUERY = 'SETUP_DEVICE_QUERY';

export function setupDeviceQuery(
  url: string,
  method: string,
  attributes: [{ string: string }],
  interval: number,
) {
  return {
    type: SETUP_DEVICE_QUERY,
    url,
    method,
    attributes,
    interval,
  };
}
