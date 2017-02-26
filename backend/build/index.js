require('/Users/martinkubat/Work/easyapi/backend/node_modules/source-map-support/source-map-support.js').install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_connections__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attribute__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entry__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__issue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__value__ = __webpack_require__(16);





const basename = __WEBPACK_IMPORTED_MODULE_1_path___default.a.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

const config = __WEBPACK_IMPORTED_MODULE_3__config_connections__["a" /* default */][env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new __WEBPACK_IMPORTED_MODULE_2_sequelize___default.a(process.env[config.use_env_variable]);
} else {
  sequelize = new __WEBPACK_IMPORTED_MODULE_2_sequelize___default.a(config.database, config.username, config.password, config);
}











let models = {
  attribute: __WEBPACK_IMPORTED_MODULE_4__attribute__["a" /* default */],
  device: __WEBPACK_IMPORTED_MODULE_5__device__["a" /* default */],
  endpoint: __WEBPACK_IMPORTED_MODULE_6__endpoint__["a" /* default */],
  entry: __WEBPACK_IMPORTED_MODULE_7__entry__["a" /* default */],
  issue: __WEBPACK_IMPORTED_MODULE_8__issue__["a" /* default */],
  model: __WEBPACK_IMPORTED_MODULE_9__model__["a" /* default */],
  service: __WEBPACK_IMPORTED_MODULE_10__service__["a" /* default */],
  user: __WEBPACK_IMPORTED_MODULE_11__user__["a" /* default */],
  value: __WEBPACK_IMPORTED_MODULE_12__value__["a" /* default */]
};

const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1);

for (const modelName in models) {
  if (!models.hasOwnProperty(modelName)) continue;

  db[capitalizeString(modelName)] = models[modelName](sequelize, __WEBPACK_IMPORTED_MODULE_2_sequelize___default.a);
}

console.log(db);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = __WEBPACK_IMPORTED_MODULE_2_sequelize___default.a;

/* harmony default export */ __webpack_exports__["a"] = db;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const { User } = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_local__["Strategy"]({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  return User.findOne({
    where: {
      email
    }
  }).then((() => {
    var _ref = _asyncToGenerator(function* (foundUser) {
      let user;
      if (foundUser) {
        // User exists
        if (!(yield foundUser.validPassword(password))) {
          console.log('Invalid password');
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }
        user = foundUser;
      } else {
        // New user
        user = yield User.create({
          email,
          passwordHash: User.generateHash(password)
        });
      }

      const payload = {
        user: user.id
      };

      const token = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign(payload, 'secret');

      return done(null, {
        user: {
          email: user.email
        },
        token
      });
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })()).catch(err => {
    return done(err);
  });
}));

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.serializeUser(function (user, done) {
  done(null, user.id);
});

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.deserializeUser(function (id, done) {
  User.find({
    where: { id }
  }, function (err, [user]) {
    done(err, user);
  });
});

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_passport___default.a;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_passport__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_bootstrap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__middleware_authentication__ = __webpack_require__(7);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__config_bootstrap__["a" /* default */])().then(_asyncToGenerator(function* () {
  /* eslint-disable new-cap */
  const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
  const port = 9001;

  yield __WEBPACK_IMPORTED_MODULE_7__models__["a" /* default */].sequelize.sync();

  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

  app.use(__WEBPACK_IMPORTED_MODULE_2__config_passport__["a" /* default */].initialize());
  app.use(__WEBPACK_IMPORTED_MODULE_8__middleware_authentication__["a" /* default */]);

  app.use('/api', __WEBPACK_IMPORTED_MODULE_3__routes_index__["a" /* default */]);
  app.use('/api/service', __WEBPACK_IMPORTED_MODULE_5__routes_service__["a" /* default */]);
  app.use('/api/auth', __WEBPACK_IMPORTED_MODULE_4__routes_auth__["a" /* default */]);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    const err = new Error('Not Found!');
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
  console.log(`Server is running on port ${port}`);
})).catch(err => console.error(err));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootstrap;
/**
 * Bootstrap: All scripts that should be executed before server starts running
 */

function bootstrap() {
  return Promise.resolve();
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const connections = {
  development: {
    username: 'martinkubat',
    password: '',
    database: 'martinkubat',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};

/* harmony default export */ __webpack_exports__["a"] = connections;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (req, res, next) {
  if (req.originalUrl.startsWith('/api/auth/')) {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  const token = req.headers.authentication.split(' ')[1];

  return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(401).end();

    const userId = decoded.id;

    return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findById(userId).then(user => user && res.next()).then(err => res.status(401).end());
  });
};;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Attribute = sequelize.define('Attribute', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Attribute.belongsTo(models.Service, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Attribute.hasMany(models.Value);
      }
    }
  });

  return Attribute;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Device = sequelize.define('Device', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate(models) {
        Device.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Device;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Endpoint = sequelize.define('Endpoint', {
    instructions: DataTypes.STRING,
    mode: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Endpoint.belongsTo(models.Service, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Endpoint;
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Entry = sequelize.define('Entry', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate(models) {
        Entry.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Entry;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Issue = sequelize.define('Issue', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate(models) {
        Issue.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Issue;
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Model = sequelize.define('Model', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Model.belongsTo(models.Service, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Model.hasMany(models.Attribute);
      }
    }
  });

  return Model;
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate(models) {
        Service.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Service.hasMany(models.Endpoint);
        Service.hasMany(models.Model);
      }
    }
  });

  return Service;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcrypt__);


/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    passwordHash: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Service);
      },
      generateHash: password => __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.hashSync(password, __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.genSaltSync(8), null)
    },
    instanceMethods: {
      generateHash: password => __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.hashSync(password, __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.genSaltSync(8), null),
      validPassword: function (password) {
        console.log(password, this.passwordHash);
        return __WEBPACK_IMPORTED_MODULE_0_bcrypt___default.a.compare(password, this.passwordHash);
      }
    }
  });

  return User;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Value = sequelize.define('Value', {
    name: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate(models) {
        Value.belongsTo(models.Attribute, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Value;
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_passport__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator__);




/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

function validate(form) {
  const errors = {};
  let success = true;

  if (!form || !form.email || !__WEBPACK_IMPORTED_MODULE_2_validator___default.a.isEmail(form.email)) {
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

  return __WEBPACK_IMPORTED_MODULE_1__config_passport__["a" /* default */].authenticate('local', (err, user) => {
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

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);



/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET index. */
router.get('/', (req, res) => {
  res.send('Hello ok yep!');
});

router.get('/models', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models__["User"].findAll({
    include: [__WEBPACK_IMPORTED_MODULE_1__models__["Service"]]
  }).then(users => {
    res.send(users);
  });
});

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_natural__ = __webpack_require__(20);



/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* POST scratch. */
router.post('/scratch', (req, res) => {
  const text = req.param('text');
  __WEBPACK_IMPORTED_MODULE_1__services_natural__["a" /* default */].generateModelStructure(text).then(result => {
    res.send(result);
  });
});

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nlp_compromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sbd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_natural__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_natural___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_natural__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pos__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pos__);
let generateModelStructure = (() => {
  var _ref = _asyncToGenerator(function* (text) {
    // Annotate raw text with POS and get dependency structure
    const parseResult = yield parse(text);
    const modelStructure = [];
    let allEntities = [];

    // Useful transformations
    // Remove oxford comma!

    for (const sentenceResult of parseResult.data) {
      // Find potential entities
      // const potentialEntities = sentenceResult.parse_list
      // .filter(word => word.POS_coarse === 'NOUN');

      // Find relationships
      const potentialRelationships = sentenceResult.parse_list.filter(function (word) {
        return word.POS_coarse === 'VERB';
      });

      // Id each word

      // TODO Fix duplicates
      // Build up tree of words to their place in parse tree
      const tokens = sentenceResult.tokens;
      const treeIndex = {};
      tokens.forEach(function (token) {
        treeIndex[token] = find(sentenceResult.parse_tree[0], function (obj) {
          return obj.word === token;
        });
      });

      for (const relationship of potentialRelationships) {
        // First containment
        const inTree = treeIndex[relationship.word];

        // Find subject and object
        const [subject] = inTree.modifiers.filter(function (o) {
          return o.arc === 'nsubj';
        });
        const [object] = inTree.modifiers.filter(function (o) {
          return o.arc === 'dobj';
        });

        let properties = [];
        if (object) {
          // This is the properties
          properties = [object, ...getConjuctions(object)];
        }
        let entities = [];
        if (subject) {
          // This is entities
          entities = [subject, ...getConjuctions(subject)];
          allEntities = [...allEntities, ...entities];
        }

        const propertiesWithTypes = [];
        for (const property of properties) {
          propertiesWithTypes.push(categoriseProp(property, inTree, relationship, entities));
        }

        for (const entity of entities) {
          const existingEntity = modelStructure.find(function (s) {
            return s.name === entity.lemma;
          });

          if (existingEntity) {
            existingEntity.properties = existingEntity.properties.concat(propertiesWithTypes);
          } else {
            modelStructure.push({
              name: entity.lemma,
              raw: entity.word,
              properties: propertiesWithTypes
            });
          }
        }
      }
    }

    postprocess(modelStructure, allEntities);
    return modelStructure;

    // return;
    //
    // // TODO Spellcheck
    // const sentences = seperateSentences(text);
    // // const structure = {};
    // //
    // for (const [, sentence] of sentences.entries()) {
    //   tokenize(sentence);
    // }
    //
    // // Find entities (nouns)
    // const sentenceA = parse('A pet has a name, two breeds, multiple toys,
    //  less than five friends, and many owners.');
    // console.log(sentenceA);
    // console.log(`Analysing "${sentenceA.text}"`);
    // console.log('Finding entities');
    // const potentialEntities = sentenceA.parse_list
    //   .filter(word => word.POS_coarse === 'NOUN');
    // console.log(potentialEntities);
    //
    // // Find relationships between entities (verbs) and properties of relationships
    // console.log('Finding relationships');
    // console.log('Finding verbs');
    // const potentialRelationship = sentenceA.parse_list
    //   .filter(word => word.POS_coarse === 'VERB');
    // console.log(potentialRelationship);
    //
    // // Id each word
    // function find(object: { modifiers: [any] }, condition: Function) {
    //   if (condition(object)) return object;
    //
    //   if (!object.modifiers || object.modifiers.length === 0) return null;
    //   for (const child of object.modifiers) {
    //     const result = find(child, condition);
    //     if (result) return result;
    //   }
    //   return null;
    // }
    // // TODO Fix duplicates
    // console.log('Build up tree');
    // const tokens = sentenceA.tokens;
    // const treeIndex = {};
    // tokens.forEach((token) => {
    //   treeIndex[token] = find(sentenceA.parse_tree[0], obj => obj.word === token);
    // });
    //
    // console.log(treeIndex);
    //
    // function getConjuctions(object) {
    //   if (!object || !object.modifiers || object.modifiers.length === 0) return [];
    //
    //   const [conjunction] = object.modifiers.filter(o => o.arc === 'conj');
    //   const deeperConjuctions = getConjuctions(conjunction);
    //
    //   if (deeperConjuctions.length) {
    //     return [
    //       conjunction,
    //       ...deeperConjuctions,
    //     ];
    //   }
    //   if (conjunction) {
    //     return [conjunction];
    //   }
    //   return [];
    // }
    //
    // const result = {};
    //
    // function findIfPropertyIsRequired() {
    //   // console.log(prop);
    //   return {
    //     lessThan: false,
    //     equal: false,
    //     moreThan: true,
    //     quantity: 1,
    //   };
    // }
    //
    // function findIfPropertyHasMultiple(prop) {
    //   const determiners = prop.modifiers.filter(o => o.arc === 'det');
    //   const adjModifiers = prop.modifiers.filter(o => o.arc === 'amod');
    //   const numModifiers = prop.modifiers.filter(o => o.arc === 'nummod');
    //
    //   const combined = determiners.concat(adjModifiers).concat(numModifiers);
    //   console.log(prop.lemma, ' findupper ', combined);
    //
    //   // Find all information related to upper bound
    //   // const allCardinalityInfo = [];
    //   // for (const modifier of combined) {
    //   //   const singleKeywords = ['a', 'single', 'one'];
    //   //   const multipleKeywords = ['many', 'multiple'];
    //   //
    //   //   if (o.arc === 'nummud') {
    //   //
    //   //   }
    //   // }
    //
    //   return {
    //     lessThan: true,
    //     equal: false,
    //     moreThan: false,
    //     quantity: 1,
    //   };
    // }
    //
    // function categoriseProp(prop) {
    //   return {
    //     type: 'string',
    //     name: prop.lemma,
    //     lowerBound: findIfPropertyIsRequired(prop),
    //     upperBound: findIfPropertyHasMultiple(prop),
    //   };
    // }
    //
    // potentialRelationship.forEach((rel) => {
    //   // TODO Broaden scope of 'have'
    //   if (rel.lemma === 'have') {
    //     const inTree = treeIndex[rel.word];
    //     console.log(inTree);
    //
    //     // Find subject
    //     const [subject] = inTree.modifiers.filter(o => o.arc === 'nsubj');
    //     const [object] = inTree.modifiers.filter(o => o.arc === 'dobj');
    //
    //     let properties = [];
    //     if (object) {
    //       // This is properties
    //       properties = [object, ...getConjuctions(object)].map(w => w);
    //     }
    //     let entities = [];
    //     if (subject) {
    //       // This is entities
    //       entities = [subject, ...getConjuctions(subject)].map(w => w.lemma);
    //     }
    //
    //     const propertiesWithTypes = {};
    //
    //     properties.forEach((prop) => {
    //       propertiesWithTypes[prop.lemma] = categoriseProp(prop);
    //     });
    //
    //     for (const entity of entities) {
    //       if (result[entity]) {
    //         result[entity] = result[entity].concat(propertiesWithTypes);
    //       } else {
    //         result[entity] = propertiesWithTypes;
    //       }
    //     }
    //   }
    // });
    //
    // console.log('\n\n', result, '\n\n');

    // check if relationship is containment


    // Look through entity types if there are instances involved (Use wordnet hypernyms for this)

    // Find quantities of each relationship from multiple and existance

    // Get facts from information

    // Combine facts

    // Construct structure in the form
    // {
    //   entity: {
    //     attribute: {
    //       name: string,
    //       type: string,
    //       lowerBound: {
    //         lessThan: boolean,
    //         equal: boolean,
    //         moreThan: boolean,
    //         quantity: 1,
    //       },
    //       upperBound: {
    //         lessThan: boolean,
    //         equal: boolean,
    //         moreThan: boolean,
    //         quantity: 1,
    //       },
    //     },
    //   },
    // }

    // return Promise.resolve({
    //   raw: text,
    // });
  });

  return function generateModelStructure(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Natural Service: A service for extracting information from natural speech.
 */




const tokenizer = new __WEBPACK_IMPORTED_MODULE_3_natural__["WordTokenizer"]();
const tagger = new __WEBPACK_IMPORTED_MODULE_4_pos__["Tagger"]();

// Uses spacy to deconstruct text into a dependancy parse tree
function parse(text) {

  return __WEBPACK_IMPORTED_MODULE_0_request_promise___default.a.post('http://localhost:5000/parse', {
    form: {
      text: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_sbd__["sentences"])(text).join('<#SENT_SEPERATOR#>')
    }
  }).then(res => JSON.parse(res));
}

// In the dependency parse tree it finds first object which satisfies the condition
function find(object, condition) {
  if (condition(object)) return object;

  if (!object || !object.modifiers || object.modifiers.length === 0) return null;
  for (const child of object.modifiers) {
    const result = find(child, condition);
    if (result) return result;
  }
  return null;
}

// In the dependency parse tree it finds all objects which satisfy the condition
function findAll(object, condition) {
  let found = [];
  if (condition(object)) found.push(object);

  if (!object || !object.modifiers || object.modifiers.length === 0) return found;

  for (const child of object.modifiers) {
    const result = findAll(child, condition);
    if (result.length) found = [...result, ...found];
  }
  return found;
}

// From an array of booleans decide the final value
function decide(values) {
  if (values.length === 0) return null;

  let sum = 0;
  for (const value of values) {
    sum += Number(value);
  }
  return sum / values.length >= 0.5;
}

// Finds the existance of property. Returns string of 'required', 'optional', 'unknown'
function findIfPropertyIsRequired(prop, context) {
  //  https://en.wikipedia.org/wiki/Auxiliary_verb
  const optionalKeywords = ['may', 'might', 'could', 'should', 'maybe', 'possible', 'possibly', 'optionally', 'optional', 'ought'];
  const requiredKeywords = ['must', 'needs', 'need', 'shall', 'will'];

  const allRequiredInformation = [];

  // Find if the relationship has monads attached
  if (!context.modifiers || !context.modifiers.length) return false;
  const monads = context.modifiers.filter(o => o.arc === 'aux');

  for (const monad of monads) {
    if (optionalKeywords.find(k => k === monad.lemma)) {
      allRequiredInformation.push(false);
    } else if (requiredKeywords.find(k => k === monad.lemma)) {
      allRequiredInformation.push(true);
    }
  }

  return decide(allRequiredInformation) || false;
}

// Finds if a property has multiple instances
function findIfPropertyHasMultiple(prop) {
  const determiners = prop.modifiers.filter(o => o.arc === 'det');
  const adjModifiers = prop.modifiers.filter(o => o.arc === 'amod');
  const numModifiers = prop.modifiers.filter(o => o.arc === 'nummod');

  const combined = determiners.concat(adjModifiers).concat(numModifiers);
  // console.log(prop.lemma, ' findupper ', combined);

  // If the noun is plural then it will be multiple
  if (prop.POS_fine === 'NNS') {
    return true;
  }

  if (combined.length === 0) return false;

  // Find all information related to upper bound
  const allCardinalityInfo = [];
  for (const modifier of combined) {
    const singleKeywords = ['a', 'single', 'one'];
    const multipleKeywords = ['many', 'multiple', 'several'];
    // const singleNumbers = ['one', 'zero'];

    if (modifier.arc === 'nummod') {
      // Parse value of number
      allCardinalityInfo.push(__WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default.a.value(modifier.lemma).number > 1);
    }

    if (singleKeywords.find(k => k === modifier.lemma)) {
      allCardinalityInfo.push(false);
    } else if (multipleKeywords.find(k => k === modifier.lemma)) {
      allCardinalityInfo.push(true);
    }
  }

  return decide(allCardinalityInfo) || false;
}

function propertyName(prop, relationship, multiple) {
  let entity = '';

  const correctedNoun = multiple ? __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default.a.noun(prop.lemma).pluralize() : __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default.a.noun(prop.lemma).singularize();

  const compounds = findAll(prop, m => m.arc === 'compound');

  if (compounds.length) {
    entity = `${compounds.map(c => c.lemma).join('_')}_${correctedNoun}`;
  } else {
    entity = correctedNoun;
  }

  if (relationship.lemma === 'have') {
    return entity;
  }

  const presentVerb = __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default.a.verb(relationship.word).to_present();

  return `${presentVerb}_${entity}`;
}

const capitalizeWord = str => str.charAt(0).toUpperCase() + str.slice(1);

function propertyType(prop, entities = []) {
  for (const entity of entities) {
    if (entity.raw === prop.raw || entity.lemma === prop.lemma) {
      return capitalizeWord(entity.lemma);
    }
  }

  return 'string';
}

function categoriseProp(prop, context, relationship, entities) {
  const hasMultiple = findIfPropertyHasMultiple(prop);
  return {
    type: propertyType(prop, entities),
    name: propertyName(prop, relationship, hasMultiple),
    raw: prop.word,
    lemma: prop.lemma,
    required: findIfPropertyIsRequired(prop, context),
    multiple: hasMultiple
  };
}

function getConjuctions(object) {
  if (!object || !object.modifiers || object.modifiers.length === 0) return [];

  const [conjunction] = object.modifiers.filter(o => o.arc === 'conj');
  const deeperConjuctions = getConjuctions(conjunction);

  if (deeperConjuctions.length) {
    return [conjunction, ...deeperConjuctions];
  }
  if (conjunction) {
    return [conjunction];
  }
  return [];
}

function postprocess(modelStructure, entities) {
  for (const models of modelStructure) {
    for (const prop of models.properties) {
      prop.type = propertyType(prop, entities);
    }
  }
}

const Natural = {
  _find: find,
  _findAll: findAll,
  _findIfPropertyIsRequired: findIfPropertyIsRequired,
  _findIfPropertyHasMultiple: findIfPropertyHasMultiple,
  seperateSentences: __WEBPACK_IMPORTED_MODULE_2_sbd__["sentences"],
  generateModelStructure,
  parse
};

/* harmony default export */ __webpack_exports__["a"] = Natural;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("natural");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("nlp_compromise");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("pos");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("sbd");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map