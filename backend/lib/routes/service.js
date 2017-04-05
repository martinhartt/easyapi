import { Router } from 'express';
import { parseSpreadsheet, parseNaturalLanguage } from '../components/parse';
import { createService, findServices } from '../components/service';

/* eslint-disable new-cap */
const router = Router();

router.post('/parseText', (req, res) => {
  const text = req.param('text');
  return parseNaturalLanguage(text).then(result => res.send(result));
});

router.post('/parseSpreadsheet', (req, res) => {
  const text = req.param('text');
  return parseSpreadsheet(text).then(result => res.send(result));
});

/* POST scratch. */
router.post('/', async (req, res) => {
  const name = req.param('name');
  const modelDefinitions = req.param('models');

  // TODO Validation

  try {
    const service = await createService(name, modelDefinitions, req.user.id);

    const response = {
      service,
      success: true
    };
    return res.json(response);
  } catch (e) {
    console.error(e);
    return res.status(501).json({
      error: e,
      success: false
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const services = await findServices(req.user.id);
    return res.json({
      services,
      success: true
    });
  } catch (e) {
    return res.status(501).json({
      error: e,
      success: false
    });
  }
});

export default router;