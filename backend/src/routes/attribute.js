import { Router } from 'express';
import databaseModels from '../models';

const { Service, Model, Attribute, Entry, Value } = databaseModels;

/* eslint-disable new-cap */
const router = Router();

/* POST scratch. */
router.post('/', async (req, res) => {
  const modelId = req.param('model');
  const name = req.param('name');
  const type = req.param('type');

  try {
    const attribute = await Attribute.create({
      name,
      type,
      ModelId: modelId,
    });

    const response = {
      attribute,
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
  const attributeId = req.param('id');

  const toUpdate = {};

  if (req.param('name')) {
    toUpdate.name = req.param('name');
  }
  if (req.param('type')) {
    toUpdate.type = req.param('type');
  }

  try {
    const attribute = await Attribute.update(
      toUpdate,
      { where: { id: attributeId } },
    );

    return res.json({
      attribute,
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
    const modelId = req.param('model');
    const attributes = await Attribute.findAll({
      where: {
        ModelId: modelId,
      },
      include: [{ all: true }],
    });
    return res.json({
      attributes,
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