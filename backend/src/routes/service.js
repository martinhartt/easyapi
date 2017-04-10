import { Router } from 'express';
import multer from 'multer';
import { parseSpreadsheet, parseNaturalLanguage } from '../components/parse';
import { createService, findServices } from '../components/service';
import databaseModels from '../models';

const { Service, Model, Attribute, Entry, Value } = databaseModels;

const upload = multer({ dest: 'upload/' });

/* eslint-disable new-cap */
const router = Router();

router.post('/parseText', (req, res) => {
  const text = req.param('text');
  return parseNaturalLanguage(text)
  .then(result => res.send(result));
});

router.post('/parseSpreadsheet', upload.single('spreadsheet'), (req, res) => {
  console.log(req.file);
  return parseSpreadsheet(req.file)
  .then(result => res.send(result));
});

/* POST scratch. */
router.post('/', async (req, res) => {
  const name = req.param('name');
  const modelDefinitions = req.param('models');

  try {
    const service = await createService(
      name,
      modelDefinitions,
      req.user.id,
    );

    const response = {
      service,
      success: true,
    };
    return res.json(response);
  } catch (e) {
    console.error(e);
    return res.status(501).json({
      error: e,
      success: false,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const services = await Service.findAll({
      where: {
        UserId: req.user.id,
      },
      include: [{ all: true, nested: true }],
    });
    return res.json({
      services,
      success: true,
    });
  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false,
    });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const serviceId = req.param('id');
    const service = await Service.findOne({
      where: {
        id: serviceId,
        UserId: req.user.id,
      },
      include: [{ all: true, nested: true }],
    });
    return res.json({
      service,
      success: true,
    });
  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false,
    });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const serviceId = req.param('id');
    const toUpdate = {};

    if (req.param('name')) {
      toUpdate.name = req.param('name');
    }
    if (req.body.isPublic !== undefined) {
      toUpdate.isPublic = req.body.isPublic;
    }
    if (req.param('handle')) {
      toUpdate.handle = req.param('handle');
    }

    const service = await Service.update(
      toUpdate,
      { where: { id: serviceId } },
    );
    return res.json({
      service,
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
