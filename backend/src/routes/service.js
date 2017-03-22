import { Router } from 'express';
import models from '../models';
import { parseSpreadsheet, parseNaturalLanguage } from '../services/parse';

const { Service, Model, Attribute, Entry, Value } = models;

/* eslint-disable new-cap */
const router = Router();

router.post('/parseText', (req, res) => {
  const text = req.param('text');
  return parseNaturalLanguage(text)
  .then(result => res.send(result));
});

router.post('/parseSpreadsheet', (req, res) => {
  const text = req.param('text');
  return parseNaturalLanguage(text);
});

/* POST scratch. */
router.post('/', async (req, res) => {
  const name = req.param('name');

  console.log('name');
  let service = await Service.create({
    name,
    isPublic: false,
    UserId: req.user.id,
  });

  const modelDefinitions = req.param('models');
  const models = [];

  let response = {
    service: service.toJSON(),
    success: true,
  };

  // TODO Validation

  try {
    for (const modelDefinition of modelDefinitions) {
      const model = await Model.create({
        name: modelDefinition.name,
        ServiceId: service.id,
      });

      let modelJSON = model.toJSON();
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

      let entries = [];

      let index = 1;
      for (const entriesDefinition of modelDefinition.entries) {
        const entry = await Entry.create({
          index,
          ModelId: model.id,
        });
        index++;

        let entryJSON = entry.toJSON()
        let values = [];

        for (const attributeString of Object.keys(entriesDefinition)) {
          if (!attributeByName[attributeString]) {
            return res.status(400).json({
              error: `Please only specify attributes which are defined in the model (${attributeString}).`,
              success: false,
            })
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

  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false,
    })
  }

  response.service.models = models;

  res.json(service);
});

export default router;
