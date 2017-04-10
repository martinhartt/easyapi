import databaseModels from '../models';
import { stringToHandle } from './utils';

const { Service, Model, Attribute, Entry, Value } = databaseModels;

/* Model definition format

{
  name: string,
  modelDefinitions: [
    {
      name: string,
      attributes: [
        {
          name: string,
          type: string,
          required: boolean,
          multiple: boolean,
        }
      ],
      entries: [
        {
          [key]: value,
        }
      ]
    }
  ]
}
*/

export async function createService(name, modelDefinitions, userId) {
  let service = await Service.create({
    name,
    isPublic: false,
    handle: stringToHandle(name),
    UserId: userId,
  });

  service = service.toJSON();

  await Model.bulkCreate(modelDefinitions.map(def => ({
    name: def.name,
    ServiceId: service.id,
    handle: stringToHandle(def.name),
  })));

  let models = await Model.findAll({
    where: {
      ServiceId: service.id,
    },
  });

  const attributesToCreate = [];
  const entriesToCreate = [];
  const entryByIndexByModel = {};

  let i = 0;
  for (const modelDefinition of modelDefinitions) {
    const model = models[i];
    i++;
    // Create attributes
    for (const attributeDefinition of modelDefinition.attributes) {
      attributesToCreate.push({
        name: attributeDefinition.name,
        type: attributeDefinition.type,
        required: attributeDefinition.required,
        multiple: attributeDefinition.multiple,
        ModelId: model.id,
      });
    }

    if (!modelDefinition.entries || modelDefinition.entries.length === 0) {
      continue;
    }

    const entryByIndex = {};
    // Create entries
    let index = 1;
    for (const entriesDefinition of modelDefinition.entries) {
      entriesToCreate.push({
        index,
        ModelId: model.id,
      });
      index++;
      entryByIndex[index] = entriesDefinition;
    }
    entryByIndexByModel[modelDefinition.name] = entryByIndex;
  }

  await Attribute.bulkCreate(attributesToCreate);
  await Entry.bulkCreate(entriesToCreate);

  models = await Model.findAll({
    where: {
      ServiceId: service.id,
    },
    include: [{ all: true, nested: true }],
  });

  const valuesToCreate = [];

  // Index: model > entry > attribute > value

  console.log(entryByIndexByModel);

  for (const model of models) {
    for (const entry of model.Entries) {
      for (const attribute of model.Attributes) {
        console.log(model.name, entry.index, attribute.name);
        const entryDefinition = entryByIndexByModel[model.name][entry.index];
        valuesToCreate.push({
          AttributeId: attribute.id,
          EntryId: entry.id,
          value: entryDefinition && entryDefinition[attribute.name],
        });
      }
    }
  }

  await Value.bulkCreate(valuesToCreate);

  service = await Service.findOne({
    where: {
      id: service.id,
    },
    include: [{ all: true, nested: true }],
  });

  return service;
}
