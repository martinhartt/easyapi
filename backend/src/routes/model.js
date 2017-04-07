import { Router } from 'express';
import databaseModels from '../models';

const { Service, Model, Attribute, Entry, Value } = databaseModels;

/* eslint-disable new-cap */
const router = Router();

/* POST scratch. */
router.post('/', async (req, res) => {
  const serviceId = req.param('service');
  const name = req.param('name');

  try {
    const model = await Model.create({
      name,
      ServiceId: serviceId,
    });

    const response = {
      model,
      success: true,
    };
    return res.json(response);
  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false,
    });
  }
});

router.patch('/:id', async (req, res) => {
  const newName = req.param('name');
  const modelId = req.param('id');

  try {
    const model = await Model.update(
      { name: newName },
      { where: { id: modelId } },
    );

    return res.json({
      model,
      success: true,
    });
  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const serviceId = req.param('service');
    const model = await Model.findAll({
      where: {
        ServiceId: serviceId,
      },
      include: [{ all: true }],
    });
    return res.json({
      model,
      success: true,
    });
  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false,
    });
  }
});


export default router;