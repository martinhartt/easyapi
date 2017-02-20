'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

require('babel-polyfill');

var _natural = require('../services/natural');

var _natural2 = _interopRequireDefault(_natural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
var router = (0, _express.Router)();

/* POST scratch. */
router.post('/scratch', function (req, res) {
  var text = req.param('text');
  _natural2.default.generateModelStructure(text).then(function (result) {
    res.send(result);
  });
});

exports.default = router;