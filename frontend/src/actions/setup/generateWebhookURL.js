// @flow

export const GENERATE_WEBHOOK_URL = 'GENERATE_WEBHOOK_URL';

export function generateWebhookURL() {
  return {
    type: GENERATE_WEBHOOK_URL,
  };
}
