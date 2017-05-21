import { Router } from 'express';
import databaseModels from '../models';

const { Attribute, Entry, Value } = databaseModels;

/* eslint-disable new-cap */
const router = Router();

/* POST scratch. */
router.post('/', async (req, res) => {
  const modelId = req.param('model');
  const name = req.param('name');
  const type = req.param('type');
  const required = req.param('required');
  const multiple = req.param('multiple');

  try {
    const attribute = await Attribute.create({
      name,
      type,
      required,
      multiple,
      ModelId: modelId,
    });

    const entries = await Entry.findAll({
      where: {
        ModelId: modelId,
      },
    });

    await Value.bulkCreate(entries.map(e => ({
      EntryId: e.id,
      AttributeId: attribute.id,
    })));

    const newEntries = await Entry.findAll({
      where: {
        ModelId: modelId,
      },
      include: [{ all: true }],
    });

    const response = {
      attribute,
      entries: newEntries,
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

router.delete('/', async (req, res) => {
  try {
    const id = req.param('id');
    const result = await Attribute.destroy({
      where: {
        id,
      },
    });
    return res.json({
      result,
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
