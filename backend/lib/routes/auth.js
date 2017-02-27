import { Router } from 'express';
import passport from '../config/passport';
import validator from 'validator';

/* eslint-disable new-cap */
const router = Router();

function validate(form) {
  const errors = {};
  let success = true;

  if (!form || !form.email || !validator.isEmail(form.email)) {
    success = false;
    errors.email = 'This is not a valid email.';
  }

  if (!form || !form.password || form.password.length < 5) {
    success = false;
    errors.password = 'This password is too short.';
  }

  return {
    success,
    errors
  };
}

/* GET index. */
router.post('/login', (req, res, next) => {
  const validation = validate({
    email: req.param('email'),
    password: req.param('password')
  });

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  return passport.authenticate('local', (err, user) => {
    console.log(err, user);
    if (err || !user) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect details'
      });
    }

    return res.status(200).json(Object.assign({
      success: true,
      errors: {}
    }, user));
  })(req, res, next);
});

export default router;