import { normalize, schema } from 'normalizr';

const attribute = new schema.Entity('attribute');

const value = new schema.Entity('value', {
  Attribute: attribute,
});

const entry = new schema.Entity('entry', {
  Values: [value],
});

const model = new schema.Entity('model', {
  Attributes: [attribute],
  Entries: [entry],
});

const endpoint = new schema.Entity('endpoint');

const service = new schema.Entity('service', {
  Endpoints: [endpoint],
  Models: [model],
});

const services = new schema.Entity('services', {
  services: [service],
});

export const normalizeServices = data => normalize(data, services);
export const normalizeService = data => normalize(data, service);
