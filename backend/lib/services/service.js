import databaseModels from '../models';

const { Service, Model, Attribute, Entry, Value } = databaseModels;

export async function createService(name, modelDefinitions, userId) {
  let service = await Service.create({
    name,
    isPublic: false,
    UserId: userId,
  });

  service = service.toJSON();

  const models = [];

  for (const modelDefinition of modelDefinitions) {
    const model = await Model.create({
      name: modelDefinition.name,
      ServiceId: service.id,
    });

    const modelJSON = model.toJSON();
    const attributes = [];
    const attributeByName = {};

    for (const attributeDefinition of modelDefinition.attributes) {
      const attribute = await Attribute.create({
        name: attributeDefinition.name,
        type: attributeDefinition.type,
        ModelId: model.id,
      });

      attributeByName[attributeDefinition.name] = attribute;
      attributes.push(attribute.toJSON());
    }

    modelJSON.attributes = attributes;

    const entries = [];

    let index = 1;
    for (const entriesDefinition of modelDefinition.entries) {
      const entry = await Entry.create({
        index,
        ModelId: model.id,
      });
      index++;

      const entryJSON = entry.toJSON();
      const values = [];

      for (const attributeString of Object.keys(entriesDefinition)) {
        if (!attributeByName[attributeString]) {
          throw new Error(`Please only specify attributes which are defined in the model (${attributeString}).`);
        }
        const value = await Value.create({
          AttributeId: attributeByName[attributeString].id,
          value: entriesDefinition[attributeString],
          EntryId: entry.id,
        });

        values.push(value.toJSON());
      }

      entryJSON.values = values;
      entries.push(entryJSON);
    }

    modelJSON.entries = entries;
    models.push(modelJSON);
  }

  service.models = models;

  return service;
}

export async function findServices(userId) {
  await Service.find({
    UserId: userId,
  });
}
