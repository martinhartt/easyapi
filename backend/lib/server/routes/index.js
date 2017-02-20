'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _models = require('../models');

/* eslint-disable new-cap */
var router = (0, _express.Router)();

/* GET index. */
router.get('/', function (req, res) {
  res.send('Hello ok yep!');
});

router.get('/models', function (req, res) {
  _models.User.findAll({
    include: [_models.Service]
  }).then(function (users) {
    res.send(users);
  });
});

exports.default = router;