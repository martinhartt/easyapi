import { Router } from 'express';
import passport from '../config/passport';

/* eslint-disable new-cap */
const router = Router();

function validate(form) {
  const errors = {};
  let success = true;

  if (!form || !form.username || form.username.length < 5) {
    success = false;
    errors.username = 'This is not a valid username.';
  }

  if (!form || !form.password || form.password.length < 5) {
    success = false;
    errors.password = 'This password is too short.';
  }

  return {
    success,
    errors,
  };
}

/* GET index. */
router.post('/login', (req, res, next) => {
  const validation = validate({
    username: req.param('username'),
    password: req.param('password'),
  });

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      errors: validation.errors,
    });
  }

  return passport.authenticate('local', (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect details',
      });
    }

    return res.status(200).json(Object.assign({
      success: true,
      errors: {},
    }, user));
  })(req, res, next);
});

router.post('/info', (req, res) => {
  res.status(200).json(Object.assign({
    success: true,
    errors: {},
    username: req.user.username,
  }));
});


export default router;
