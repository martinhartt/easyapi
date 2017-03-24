import { Router } from 'express';
import databaseModels from '../models';

const { Service, Model, Attribute, Entry, Value } = databaseModels;

/* eslint-disable new-cap */
const router = Router();

router.patch('/', async (req, res) => {
  const entryId = req.param('entry');
  const attributeId = req.param('attribute');
  const newValue = req.param('value');

  try {
    const [foundValue] = await Value.findOrCreate({
      where: {
        EntryId: entryId,
        AttributeId: attributeId,
      },
      include: [{ all: true }],
    });

    // TODO Validate new value

    const [value] = await Value.update(
      { value: newValue },
      { where: { id: foundValue.id } },
    );

    const response = {
      value,
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


export default router;
