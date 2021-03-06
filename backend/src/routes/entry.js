import { Router } from 'express';
import databaseModels from '../models';

const { Attribute, Entry, Value } = databaseModels;

/* eslint-disable new-cap */
const router = Router();

/* POST scratch. */
router.post('/', async (req, res) => {
  const modelId = req.param('model');

  try {
    const newestEntry = await Entry.findOne({
      where: {
        ModelId: modelId,
      },
      order: 'index DESC',
    });

    const index = (newestEntry ? newestEntry.index : 0) + 1;

    const attributes = await Attribute.findAll({
      where: {
        ModelId: modelId,
      },
    });

    let entry = await Entry.create({
      index,
      ModelId: modelId,
    });

    const valuePromises = [];
    for (const attribute of attributes) {
      valuePromises.push(
        Value.create({
          EntryId: entry.id,
          AttributeId: attribute.id,
          value: '',
        }),
      );
    }
    await Promise.all(valuePromises);

    entry = await Entry.findOne({
      where: {
        id: entry.id,
      },
      include: [{ all: true }],
    });

    const response = {
      entry,
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

router.get('/', async (req, res) => {
  try {
    const modelId = req.param('model');
    const entries = await Entry.findAll({
      where: {
        ModelId: modelId,
      },
      include: [{ all: true }],
    });
    return res.json({
      entries,
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

    await Value.destroy({
      where: {
        EntryId: id,
      },
    });

    await Entry.destroy({
      where: {
        id,
      },
    });

    return res.json({
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
