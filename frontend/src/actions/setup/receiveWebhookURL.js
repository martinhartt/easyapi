// @flow

export const RECEIVE_WEBHOOK_URL = 'RECEIVE_WEBHOOK_URL';

export function receiveWebhookURL(url: string) {
  return {
    type: RECEIVE_WEBHOOK_URL,
    url,
  };
}
