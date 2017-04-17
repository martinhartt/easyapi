import { Router } from 'express';
import databaseModels from '../models';
import { stringToShortName } from '../components/utils';

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
      shortName: stringToShortName(name),
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
  const modelId = req.param('id');

  const toUpdate = {};

  if (req.param('name')) {
    toUpdate.name = req.param('name');
    toUpdate.shortName = stringToShortName(toUpdate.name);
  }

  if (req.param('isFindEnabled')) {
    toUpdate.isFindEnabled = req.param('isFindEnabled');
  }

  if (req.param('isFindOneEnabled')) {
    toUpdate.isFindOneEnabled = req.param('isFindOneEnabled');
  }

  if (req.param('isCreateEnabled')) {
    toUpdate.isCreateEnabled = req.param('isCreateEnabled');
  }

  if (req.param('isUpdateEnabled')) {
    toUpdate.isUpdateEnabled = req.param('isUpdateEnabled');
  }

  if (req.param('isDeleteEnabled')) {
    toUpdate.isDeleteEnabled = req.param('isDeleteEnabled');
  }

  try {
    const model = await Model.update(
      toUpdate,
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

router.delete('/', async (req, res) => {
  try {
    const id = req.param('id');
    const result = await Model.destroy({
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
