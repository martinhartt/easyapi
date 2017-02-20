// @flow

export const SELECT_DEVICE = 'SELECT_DEVICE';

export function selectDevice(device: number) {
  return {
    type: SELECT_DEVICE,
    device,
  };
}
