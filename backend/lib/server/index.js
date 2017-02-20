'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _service = require('./routes/service');

var _service2 = _interopRequireDefault(_service);

var _bootstrap = require('./config/bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _bootstrap2.default)().then(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var app, port;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          /* eslint-disable new-cap */
          app = (0, _express2.default)();
          port = 9001;
          _context.next = 4;
          return _models2.default.sequelize.sync();

        case 4:

          app.use(_bodyParser2.default.json());

          app.use('/api', _index2.default);
          app.use('/api/service', _service2.default);

          // catch 404 and forward to error handler
          app.use(function (req, res, next) {
            var err = new Error('Not Found!');
            err.status = 404;
            next(err);
          });

          // error handler
          app.use(function (err, req, res) {
            // set locals, only providing error in development
            /* eslint-disable no-param-reassign */
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
          });

          app.listen(port);
          console.log('Server is running on port ' + port);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))).catch(function (err) {
  return console.error(err);
});