import { Router } from 'express';
import { User, Service } from '../models';

/* eslint-disable new-cap */
const router = Router();

/* GET index. */
router.get('/', (req, res) => {
  res.send('Hello ok yep!');
});

router.get('/models', (req, res) => {
  User.findAll({
    include: [Service],
  }).then((users) => {
    res.send(users);
  });
});

export default router;
