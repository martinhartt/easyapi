import { Router } from 'express';
import Natural from '../services/natural';

/* eslint-disable new-cap */
const router = Router();

/* POST scratch. */
router.post('/scratch', (req, res) => {
  const text = req.param('text');
  Natural.generateModelStructure(text).then(result => {
    res.send(result);
  });
});

export default router;