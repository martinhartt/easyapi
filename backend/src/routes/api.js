import { Router } from 'express';
import databaseModels from '../models';

const { Service, Model, Attribute, Entry, Value } = databaseModels;


/* eslint-disable new-cap */
const router = Router();

router.all('/:service/:model/:id?', (req, res) => {
  const serviceHandle = req.param('service');
  const modelHandle = req.param('model');
  const id = req.param('id');
  const method = req.method;
  console.log(req);

  let data;

  try {
    const service = await Service.findOne({
      where: {
        handle: serviceHandle,
      },
    });

    const model = await Model.findOne({
      where: {
        handle: modelHandle,
      }
    })

    switch (method) {
      case 'GET':
      if (id) {
        // Find One
        data =
      } else {
        // Find All

      }
      break;
      case 'POST':
      // Create

      break;
      case 'PATCH':
      // Update

      break;
      case 'DELETE':
      // Delete

      break;
      default:

    }
  } catch (e) {

  }

  res.send({ service, model, id, method });
});


export default router;
