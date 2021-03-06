import { Router } from 'express';
import { object } from 'underscore';
import databaseModels from '../models';
import { decode } from '../components/utils';

const { Service, Model, Attribute, Entry, Value, User } = databaseModels;


/* eslint-disable new-cap */
const router = Router();

router.all('/:user/:service/:model/:id?', async (req, res) => {
  const username = req.param('user');
  const serviceShortName = req.param('service');
  const modelShortName = req.param('model');
  const id = req.param('id');
  const method = req.method;
  const input = req.body;

  let data;

  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(404).send({ success: false, message: `This user (${username}) was not found!` });
    }

    const service = await Service.findOne({
      where: {
        shortName: serviceShortName,
        UserId: user.id,
      },
    });
    if (!service) {
      return res.status(404).send({ success: false, message: `This service (${serviceShortName}) was not found!` });
    }

    if (!service.isPublic) {
      return res.status(403).send({ success: false, message: 'This service is not public!' });
    }

    const model = await Model.findOne({
      where: {
        shortName: modelShortName,
        ServiceId: service.id,
      },
    });

    if (!model) {
      return res.status(404).send({ success: false, message: `This model (${modelShortName}) was not found!` });
    }

    const attributes = await Attribute.findAll({
      where: {
        ModelId: model.id,
      },
    });

    data = { user, service, model };

    const forbiddenResponse = { success: false, message: 'This action is not public!' };

    switch (method) {
      case 'GET': {
        if (id) {
          // Find One
          if (!model.isFindOneEnabled) {
            return res.status(403).send(forbiddenResponse);
          }

          const entry = await Entry.findOne({
            where: {
              index: id,
              ModelId: model.id,
            },
          });

          if (!entry) {
            return res.status(404).send({ success: false, message: 'This resource doesn\'t exist!' });
          }

          const values = await Value.findAll({
            where: {
              EntryId: entry.id,
            },
          });

          const valueByAttributeId = object(
            values.map(v => v.AttributeId), values.map(v => v.value),
          );
          const obj = {};
          obj.id = entry.index;
          for (const attribute of attributes) {
            obj[attribute.name] = decode(valueByAttributeId[attribute.id], attribute.type);
          }

          data = obj;
        } else {
          // Find All
          if (!model.isFindEnabled) {
            return res.status(403).send(forbiddenResponse);
          }

          const entries = await Entry.findAll({
            where: {
              ModelId: model.id,
            },
          });
          const values = await Value.findAll({
            where: {
              EntryId: entries.map(a => a.id),
            },
          });
          data = { values, attributes, entries };

          const objects = [];
          for (const entry of entries) {
            const obj = {};

            const localValues = values.filter(v => v.EntryId === entry.id);
            const valueByAttributeId = object(
              localValues.map(v => v.AttributeId), localValues.map(v => v.value),
            );
            obj.id = entry.index;
            for (const attribute of attributes) {
              obj[attribute.name] = decode(valueByAttributeId[attribute.id], attribute.type);
            }

            objects.push(obj);
          }

          data = objects;
        }
        break;
      }
      case 'POST': {
        // Create
        if (!model.isCreateEnabled) {
          return res.status(403).send(forbiddenResponse);
        }
        const newestEntry = await Entry.findOne({
          where: {
            ModelId: model.id,
          },
          order: 'index DESC',
        });

        const index = (newestEntry ? newestEntry.index : 0) + 1;

        const entry = await Entry.create({
          index,
          ModelId: model.id,
        });

        const obj = {};
        obj.id = entry.index;

        const valuePromises = [];
        for (const attribute of attributes) {
          valuePromises.push(
            Value.create({
              EntryId: entry.id,
              AttributeId: attribute.id,
              value: input[attribute.name],
            }),
          );
          obj[attribute.name] = decode(input[attribute.name], attribute.type) || null;
        }
        await Promise.all(valuePromises);
        data = obj;
        break;
      }
      case 'PATCH': {
        // Update
        if (!model.isUpdateEnabled) {
          return res.status(403).send(forbiddenResponse);
        }

        const entry = await Entry.findOne({
          where: {
            index: id,
            ModelId: model.id,
          },
        });


        if (!entry) {
          return res.status(404).send({ success: false, message: 'This resource doesn\'t exist!' });
        }

        const values = await Value.findAll({
          where: {
            EntryId: entry.id,
          },
        });

        const valuePromises = [];
        const valueByAttributeId = object(values.map(v => v.AttributeId), values.map(v => v));


        const obj = {};
        obj.id = entry.id;
        for (const attribute of attributes) {
          const newValue = input[attribute.name];
          if (newValue) {
            const oldValue = valueByAttributeId[attribute.id];
            if (newValue !== oldValue.value) {
              if (oldValue) {
                // Update
                valuePromises.push(
                  Value.update(
                    { value: newValue },
                    { where: { id: oldValue.id } },
                  ),
                );
              } else {
                // Create
                valuePromises.push(
                  Value.create({
                    EntryId: entry.id,
                    AttributeId: attribute.id,
                    value: newValue,
                  }),
                );
              }
            }
            obj[attribute.name] = newValue;
          } else {
            obj[attribute.name] = valueByAttributeId[attribute.id].value;
          }
        }

        await Promise.all(valuePromises);
        data = obj;

        break;
      }
      case 'DELETE': {
        // Delete
        if (!model.isDeleteEnabled) {
          return res.status(403).send(forbiddenResponse);
        }

        const entry = await Entry.findOne({
          where: {
            index: id,
            ModelId: model.id,
          },
        });


        if (!entry) {
          return res.status(404).send({ success: false, message: 'This resource doesn\'t exist!' });
        }

        await Value.destroy({
          where: {
            EntryId: entry.id,
          },
        });

        const result = await Entry.destroy({
          where: {
            index: id,
            ModelId: model.id,
          },
        });
        data = Boolean(result);

        break;
      }
      default: {
        return res.status(400).send({ success: false, message: 'This action is not supported by EasyAPI!' });
      }
    }
  } catch (e) {
    return res.status(500).send({ success: false, error: e });
  }

  res.send({ success: true, data });
});


export default router;
