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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_connections__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attribute__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__issue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__value__ = __webpack_require__(21);





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
/* harmony export (immutable) */ __webpack_exports__["a"] = stringToHandle;


function stringToHandle(string) {
  return string.toLowerCase().replace(/\W/g, '');
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const { User } = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_local__["Strategy"]({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => User.findOne({
  where: {
    username
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
        username,
        passwordHash: User.generateHash(password)
      });
    }

    const payload = {
      user: user.id
    };

    const token = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign(payload, 'secret');

    return done(null, {
      user: {
        username: user.username
      },
      token
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})()).catch(err => done(err))));

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.serializeUser((user, done) => {
  done(null, user.id);
});

__WEBPACK_IMPORTED_MODULE_0_passport___default.a.deserializeUser((id, done) => {
  User.find({
    where: { id }
  }, (err, [user]) => {
    done(err, user);
  });
});

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_passport___default.a;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_index__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_entry__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_attribute__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_value__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_api__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_bootstrap__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__middleware_authentication__ = __webpack_require__(12);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
















__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__config_bootstrap__["a" /* default */])().then(_asyncToGenerator(function* () {
  /* eslint-disable new-cap */
  const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
  const port = 9001;

  yield __WEBPACK_IMPORTED_MODULE_12__models__["a" /* default */].sequelize.sync();

  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

  app.use(__WEBPACK_IMPORTED_MODULE_2__config_passport__["a" /* default */].initialize());
  app.use(__WEBPACK_IMPORTED_MODULE_13__middleware_authentication__["a" /* default */]);

  app.use('/api', __WEBPACK_IMPORTED_MODULE_3__routes_index__["a" /* default */]);
  app.use('/api/service', __WEBPACK_IMPORTED_MODULE_5__routes_service__["a" /* default */]);
  app.use('/api/auth', __WEBPACK_IMPORTED_MODULE_4__routes_auth__["a" /* default */]);
  app.use('/api/model', __WEBPACK_IMPORTED_MODULE_6__routes_model__["a" /* default */]);
  app.use('/api/attribute', __WEBPACK_IMPORTED_MODULE_8__routes_attribute__["a" /* default */]);
  app.use('/api/entry', __WEBPACK_IMPORTED_MODULE_7__routes_entry__["a" /* default */]);
  app.use('/api/value', __WEBPACK_IMPORTED_MODULE_9__routes_value__["a" /* default */]);
  app.use('/api/api/', __WEBPACK_IMPORTED_MODULE_10__routes_api__["a" /* default */]);

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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nlp_compromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sbd__);
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
        return word.POS_fine.startsWith('V');
      });

      // Build up tree of words to their place in parse tree
      const tokens = sentenceResult.parse_list;
      const cleanTree = filterTree(sentenceResult.parse_tree[0], function (m) {
        return m.POS_fine.startsWith('V') || m.POS_fine.startsWith('N') || m.POS_fine === 'PRP';
      });

      const treeIndex = {};
      const cleanTreeIndex = {};
      tokens.forEach(function (token) {
        treeIndex[token.id] = find(sentenceResult.parse_tree[0], function (obj) {
          return obj.id === token.id;
        });
        cleanTreeIndex[token.id] = find(cleanTree, function (obj) {
          return obj.id === token.id;
        });
      });

      // console.log(cleanTree, cleanTreeIndex)

      for (const relationship of potentialRelationships) {
        // First containment
        let inTree = cleanTreeIndex[relationship.id];

        const nounTree = filterTree(inTree, function (m) {
          return m.POS_fine.startsWith('N') || m.POS_fine === 'PRP';
        });
        const compareDepth = function (a, b) {
          return a.depth - b.depth;
        };

        if (!nounTree || nounTree.length < 1) continue;
        // Find subject and object
        // console.log('\n\n\nOK ',inTree, nounTree);
        const [subject] = nounTree.filter(function (o) {
          return o.arc.includes('subj');
        }).sort(compareDepth);
        const [object] = nounTree.filter(function (o) {
          return o.arc.includes('obj');
        }).sort(compareDepth);

        let attributes = [];
        if (object) {
          // This is the attributes
          const fullObject = treeIndex[object.id];
          attributes = [fullObject, ...getConjuctions(fullObject)];

          attributes = attributes.map(assignNounPhrase);
        }
        let entities = [];
        if (subject) {
          // This is entities
          const fullSubject = treeIndex[subject.id];
          entities = [fullSubject, ...getConjuctions(fullSubject)];
          allEntities = [...allEntities, ...entities];
          allEntities = allEntities.map(assignNounPhrase);
        }

        inTree = treeIndex[relationship.id];

        const attributesWithTypes = [];
        for (const property of attributes) {
          attributesWithTypes.push(categoriseProp(property, inTree, relationship, entities));
        }

        for (const entity of entities) {
          const existingEntity = modelStructure.find(function (s) {
            return s.name === entity.lemma;
          });

          if (existingEntity) {
            existingEntity.attributes = existingEntity.attributes.concat(attributesWithTypes);
          } else {
            modelStructure.push({
              name: buildPhrase(entity, function (w) {
                return capitalizeWord(w);
              }, ' '),
              raw: entity.word,
              attributes: attributesWithTypes
            });
          }
        }
      }
    }

    postprocess(modelStructure, allEntities);
    return modelStructure;
  });

  return function generateModelStructure(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Natural Service: A service for extracting information from natural speech.
 */


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
  const determiners = prop.modifiers ? prop.modifiers.filter(o => o.arc === 'det') : [];
  const adjModifiers = prop.modifiers ? prop.modifiers.filter(o => o.arc === 'amod') : [];
  const numModifiers = prop.modifiers ? prop.modifiers.filter(o => o.arc === 'nummod') : [];

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

function isContainment(relationship) {
  const containmentWords = ['have', 'include', 'incorporate', 'consist', 'comprise', 'contain'];

  return containmentWords.find(w => w == relationship.lemma);
}

function buildPhrase(tree, transform = w => w, space = '_') {
  const othersInPhrase = tree.othersInPhrase;

  if (othersInPhrase.length) {
    return [tree, ...othersInPhrase].sort((a, b) => a.start - b.start).map(o => o.word).map(transform).join(space);
  }
  return tree.word;
}

function propertyName(prop, relationship, multiple) {
  let entity = '';

  const correctedNoun = multiple ? __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default.a.noun(prop.lemma).pluralize() : __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default.a.noun(prop.lemma).singularize();

  const othersInPhrase = prop.othersInPhrase;

  entity = buildPhrase(prop);

  if (isContainment(relationship)) {
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

  const possibleTypes = [];

  // Check criteria for date.
  const dateKeywords = ['date', 'day'];

  // Check criteria for number.
  const numberKeywords = ['number', 'integer', 'float', 'double', ''];

  // Check for integer or float

  return 'string';
}

function categoriseProp(prop, context, relationship, entities) {
  const multiple = findIfPropertyHasMultiple(prop);

  const type = propertyType(prop, entities);
  const name = propertyName(prop, relationship, multiple);
  const required = findIfPropertyIsRequired(prop, context);

  return {
    type,
    name,
    raw: prop.word,
    lemma: prop.lemma,
    required,
    multiple
  };
}

function getConjuctions(object) {
  return followModifiers(object, o => o.arc === 'conj');
}

function followModifiers(tree, condition) {
  if (!tree || !tree.modifiers || tree.modifiers.length === 0) return [];

  const [modifier] = tree.modifiers.filter(condition);
  const deeperConjuctions = followModifiers(modifier, condition);

  if (deeperConjuctions.length) {
    return [modifier, ...deeperConjuctions];
  }
  if (modifier) {
    return [modifier];
  }
  return [];
}

function postprocess(modelStructure, entities) {
  for (const models of modelStructure) {
    for (const prop of models.attributes) {
      prop.type = propertyType(prop, entities);
    }
  }
}

function flatMap(array, lambda) {
  if (!array) return [];
  return Array.prototype.concat.apply([], array.map(lambda));
}

function flatten(array) {
  if (!array) return [];
  return Array.prototype.concat.apply([], array);
}

function filterTree(tree, condition, depth = 0) {
  if (!tree) return;
  if (depth === 0) tree = JSON.parse(JSON.stringify(tree)); // Clone the tree

  const modifiers = flatMap(tree.modifiers, m => filterTree(m, e => condition(e, depth, tree), depth + 1));

  if (condition(tree)) {
    if (modifiers.length < 1) {
      // delete tree.modifiers;
      return Object.assign(tree, {
        modifiers: undefined
      });
    }
    return Object.assign(tree, {
      modifiers
    });
  }
  return modifiers;
}

function assignNounPhrase(p) {
  const preps = findAll(p, o => o.arc === 'prep');
  const prepPhrases = preps.map(o => [o, ...o.modifiers.filter(m => m.arc === 'pobj')]);

  const tags = ['compound', 'amod'];
  const more = findAll(p, m => tags.includes(m.arc));

  p.othersInPhrase = [...flatten(prepPhrases), ...more].sort((a, b) => a.start - b.start);

  return p;
}

const Natural = {
  _find: find,
  _findAll: findAll,
  _findIfPropertyIsRequired: findIfPropertyIsRequired,
  _findIfPropertyHasMultiple: findIfPropertyHasMultiple,
  _filterTree: filterTree,
  seperateSentences: __WEBPACK_IMPORTED_MODULE_2_sbd__["sentences"],
  generateModelStructure,
  parse
};

/* harmony default export */ __webpack_exports__["a"] = Natural;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xlsx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_natural__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSpreadsheet;
/* unused harmony export determineType */
/* unused harmony export findType */
/* harmony export (immutable) */ __webpack_exports__["a"] = parseNaturalLanguage;




function parseSpreadsheet(file) {
  // Assume spreadsheet is array of csv's
  const workbook = __WEBPACK_IMPORTED_MODULE_0_xlsx___default.a.readFile(file.path);

  const sheetNames = workbook.SheetNames;

  const csvs = sheetNames.map(name => workbook.Sheets[name]).map(sheet => __WEBPACK_IMPORTED_MODULE_0_xlsx___default.a.utils.sheet_to_csv(sheet));

  const sheetByName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_underscore__["object"])(sheetNames, csvs);

  const allModelDefinitions = [];

  for (const name of sheetNames) {
    const csv = sheetByName[name];
    const modelDefinition = {};
    const [headingLine, ...rowLines] = csv.split('\n');
    const headings = headingLine.split(',');
    const rows = rowLines.map(r => r.split(',')); // Get first 20 rows for sample data
    modelDefinition.name = name;

    const attributes = [];
    const entries = [];

    for (let i = 0; i < headings.length; i++) {
      const headingName = headings[i].toLowerCase();

      const types = determineType(new Set(rows.slice(0, 20).map(row => findType(row[i]))));
      attributes.push(Object.assign({ name: headingName }, types));
    }

    rows.forEach(row => {
      const entry = {};
      attributes.forEach((attribute, i) => {
        entry[attribute.name] = row[i];
      });
      entries.push(entry);
    });

    modelDefinition.entries = entries;
    modelDefinition.attributes = attributes;
    allModelDefinitions.push(modelDefinition);
  }
  return Promise.resolve(allModelDefinitions);
}

// Given a array of type information, determines the type which encompases all values
function determineType(information) {
  let type;
  let multiple = false;
  let required = true;

  for (const value of information) {
    if (value === null || value === undefined) {
      required = false;
      continue;
    }

    if (value.type === 'string') {
      type = 'string';
    } else if (value.type === 'float') {
      if (type !== 'string') {
        type = 'float';
      }
    } else if (value.type === 'integer') {
      if (type !== 'float' || type !== 'string') {
        type = 'integer';
      }
    }

    if (value.multiple == true) {
      multiple = true;
    }
  }

  return {
    type,
    multiple,
    required
  };
}

// Given a string, finds the most likely type
function findType(raw) {
  // If there is no value assume null
  if (raw === null || raw === undefined) return null;

  const string = raw.trim();
  if (string.length === 0) return null;

  const object = safeJSONParse(string);
  const multiple = Array.isArray(object);
  let type;

  if (multiple) {
    type = 'string';
    type = determineType(object.map(findType)).type;
    console.log(type);
    if (type.multiple) {
      throw new Error('Multidimensional arrays are not supported!');
    }
  } else {
    // Check for floats
    if (/^-?((\d+\.\d*)|(\d+\.\d*))$/.test(string)) {
      type = 'float';
    } else if (/^-?(\d+)$/.test(string)) {
      type = 'integer';
    } else {
      type = 'string';
    }
  }

  console.log(string, type);
  return {
    type,
    multiple,
    example: string
  };
}

function safeJSONParse(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
}

function parseNaturalLanguage(text) {
  return __WEBPACK_IMPORTED_MODULE_1__components_natural__["a" /* default */].generateModelStructure(text);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createService; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_0__models__["a" /* default */];

/* Model definition format

{
  name: string,
  modelDefinitions: [
    {
      name: string,
      attributes: [
        {
          name: string,
          type: string,
          required: boolean,
          multiple: boolean,
        }
      ],
      entries: [
        {
          [key]: value,
        }
      ]
    }
  ]
}
*/

let createService = (() => {
  var _ref = _asyncToGenerator(function* (name, modelDefinitions, userId) {
    let service = yield Service.create({
      name,
      isPublic: false,
      handle: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* stringToHandle */])(name),
      UserId: userId
    });

    service = service.toJSON();

    yield Model.bulkCreate(modelDefinitions.map(function (def) {
      return {
        name: def.name,
        ServiceId: service.id,
        handle: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* stringToHandle */])(def.name)
      };
    }));

    let models = yield Model.findAll({
      where: {
        ServiceId: service.id
      }
    });

    const attributesToCreate = [];
    const entriesToCreate = [];
    const entryByIndexByModel = {};

    let i = 0;
    for (const modelDefinition of modelDefinitions) {
      const model = models[i];
      i++;
      // Create attributes
      for (const attributeDefinition of modelDefinition.attributes) {
        attributesToCreate.push({
          name: attributeDefinition.name,
          type: attributeDefinition.type,
          required: attributeDefinition.required,
          multiple: attributeDefinition.multiple,
          ModelId: model.id
        });
      }

      if (!modelDefinition.entries || modelDefinition.entries.length === 0) {
        continue;
      }

      const entryByIndex = {};
      // Create entries
      let index = 1;
      for (const entriesDefinition of modelDefinition.entries) {
        entriesToCreate.push({
          index,
          ModelId: model.id
        });
        index++;
        entryByIndex[index] = entriesDefinition;
      }
      entryByIndexByModel[modelDefinition.name] = entryByIndex;
    }

    yield Attribute.bulkCreate(attributesToCreate);
    yield Entry.bulkCreate(entriesToCreate);

    models = yield Model.findAll({
      where: {
        ServiceId: service.id
      },
      include: [{ all: true, nested: true }]
    });

    const valuesToCreate = [];

    // Index: model > entry > attribute > value

    console.log(entryByIndexByModel);

    for (const model of models) {
      for (const entry of model.Entries) {
        for (const attribute of model.Attributes) {
          console.log(model.name, entry.index, attribute.name);
          const entryDefinition = entryByIndexByModel[model.name][entry.index];
          valuesToCreate.push({
            AttributeId: attribute.id,
            EntryId: entry.id,
            value: entryDefinition && entryDefinition[attribute.name]
          });
        }
      }
    }

    yield Value.bulkCreate(valuesToCreate);

    service = yield Service.findOne({
      where: {
        id: service.id
      },
      include: [{ all: true, nested: true }]
    });

    return service;
  });

  return function createService(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);



const { User } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = function (req, res, next) {
  if (req.originalUrl.startsWith('/api/auth/')) {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  const token = req.headers.authorization.split(' ')[1];
  return __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(401).end();

    const userId = decoded.user;

    return User.findById(userId).then(user => {
      if (user) {
        req.user = user;
        return next();
      }
      return res.status(401).end();
    }).catch(err => res.status(401).end());
  });
};;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Attribute = sequelize.define('Attribute', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    multiple: DataTypes.BOOLEAN,
    required: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate(models) {
        Attribute.belongsTo(models.Model, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Attribute;
};

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Entry = sequelize.define('Entry', {
    index: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        Entry.belongsTo(models.Model, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Entry.hasMany(models.Value);
      }
    }
  });

  return Entry;
};

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Model = sequelize.define('Model', {
    name: DataTypes.STRING,
    handle: DataTypes.STRING,
    isFindEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isFindOneEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isCreateEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isUpdateEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isDeleteEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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
        Model.hasMany(models.Entry);
      }
    }
  });

  return Model;
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    handle: DataTypes.STRING,
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcrypt__);


/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Value = sequelize.define('Value', {
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Value.belongsTo(models.Entry, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
        Value.belongsTo(models.Attribute);
      }
    }
  });

  return Value;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const { Service, Model, Attribute, Entry, Value, User } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.all('/:user/:service/:model/:id?', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const username = req.param('user');
    const serviceHandle = req.param('service');
    const modelHandle = req.param('model');
    const id = req.param('id');
    const method = req.method;
    const input = req.body;
    console.log(req);

    let data;

    try {
      const user = yield User.findOne({
        where: {
          username
        }
      });

      const service = yield Service.findOne({
        where: {
          handle: serviceHandle,
          UserId: user.id
        }
      });

      if (!service.isPublic) {
        return res.status(403).send({ success: false });
      }

      const model = yield Model.findOne({
        where: {
          handle: modelHandle
        }
      });

      const attributes = yield Attribute.findAll({
        where: {
          ModelId: model.id
        }
      });

      data = { user, service, model };

      switch (method) {
        case 'GET':
          {
            if (id) {
              // Find One
              if (!model.isFindOneEnabled) {
                return res.status(403).send({ success: false });
              }

              const entry = yield Entry.findOne({
                where: {
                  index: id,
                  ModelId: model.id
                }
              });
              const values = yield Value.findAll({
                where: {
                  EntryId: entry.id
                }
              });

              const valueByAttributeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_underscore__["object"])(values.map(function (v) {
                return v.AttributeId;
              }), values.map(function (v) {
                return v.value;
              }));
              const obj = {};
              obj.id = entry.index;
              for (const attribute of attributes) {
                obj[attribute.name] = valueByAttributeId[attribute.id];
              }

              data = obj;
            } else {
              // Find All
              if (!model.isFindEnabled) {
                return res.status(403).send({ success: false });
              }

              const entries = yield Entry.findAll({
                where: {
                  ModelId: model.id
                }
              });
              const values = yield Value.findAll({
                where: {
                  EntryId: entries.map(function (a) {
                    return a.id;
                  })
                }
              });
              data = { values, attributes, entries };

              const objects = [];
              for (const entry of entries) {
                const obj = {};

                const localValues = values.filter(function (v) {
                  return v.EntryId === entry.id;
                });
                const valueByAttributeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_underscore__["object"])(localValues.map(function (v) {
                  return v.AttributeId;
                }), localValues.map(function (v) {
                  return v.value;
                }));
                obj.id = entry.index;
                for (const attribute of attributes) {
                  obj[attribute.name] = valueByAttributeId[attribute.id];
                }

                objects.push(obj);
              }

              data = objects;
            }
            break;
          }
        case 'POST':
          {
            // Create
            if (!model.isCreateEnabled) {
              return res.status(403).send({ success: false });
            }
            const newestEntry = yield Entry.findOne({
              where: {
                ModelId: model.id
              },
              order: 'index DESC'
            });

            const index = (newestEntry ? newestEntry.index : 0) + 1;

            const entry = yield Entry.create({
              index,
              ModelId: model.id
            });

            const obj = {};
            obj.id = entry.index;

            const valuePromises = [];
            for (const attribute of attributes) {
              valuePromises.push(Value.create({
                EntryId: entry.id,
                AttributeId: attribute.id,
                value: input[attribute.name]
              }));
              obj[attribute.name] = input[attribute.name] || null;
            }
            yield Promise.all(valuePromises);
            data = obj;
            break;
          }
        case 'PATCH':
          {
            // Update
            if (!model.isUpdateEnabled) {
              return res.status(403).send({ success: false });
            }

            const entry = yield Entry.findOne({
              where: {
                index: id,
                ModelId: model.id
              }
            });
            const values = yield Value.findAll({
              where: {
                EntryId: entry.id
              }
            });

            const valuePromises = [];
            const valueByAttributeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_underscore__["object"])(values.map(function (v) {
              return v.AttributeId;
            }), values.map(function (v) {
              return v;
            }));

            const obj = {};
            obj.id = entry.id;
            for (const attribute of attributes) {
              const newValue = input[attribute.name];
              if (newValue) {
                const oldValue = valueByAttributeId[attribute.id];
                if (newValue !== oldValue.value) {
                  if (oldValue) {
                    // Update
                    valuePromises.push(Value.update({ value: newValue }, { where: { id: oldValue.id } }));
                  } else {
                    // Create
                    valuePromises.push(Value.create({
                      EntryId: entry.id,
                      AttributeId: attribute.id,
                      value: newValue
                    }));
                  }
                }
                obj[attribute.name] = newValue;
              } else {
                obj[attribute.name] = valueByAttributeId[attribute.id].value;
              }
            }

            yield Promise.all(valuePromises);
            data = obj;

            break;
          }
        case 'DELETE':
          {
            // Delete
            if (!model.isDeleteEnabled) {
              return res.status(403).send({ success: false });
            }

            const entry = yield Entry.findOne({
              where: {
                index: id,
                ModelId: model.id
              }
            });

            yield Value.destroy({
              where: {
                EntryId: entry.id
              }
            });

            const result = yield Entry.destroy({
              where: {
                index: id,
                ModelId: model.id
              }
            });
            data = Boolean(result);

            break;
          }
        default:
          {
            return res.status(400).send({ success: false });
          }
      }
    } catch (e) {
      return res.status(500).send({ success: false, error: e });
    }

    res.send({ success: true, data });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* POST scratch. */
router.post('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const modelId = req.param('model');
    const name = req.param('name');
    const type = req.param('type');
    const required = req.param('required');
    const multiple = req.param('multiple');

    try {
      const attribute = yield Attribute.create({
        name,
        type,
        required,
        multiple,
        ModelId: modelId
      });

      const response = {
        attribute,
        success: true
      };
      return res.json(response);
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.patch('/:id', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    const attributeId = req.param('id');

    const toUpdate = {};

    if (req.param('name')) {
      toUpdate.name = req.param('name');
    }
    if (req.param('type')) {
      toUpdate.type = req.param('type');
    }

    try {
      const attribute = yield Attribute.update(toUpdate, { where: { id: attributeId } });

      return res.json({
        attribute,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.get('/', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      const modelId = req.param('model');
      const attributes = yield Attribute.findAll({
        where: {
          ModelId: modelId
        },
        include: [{ all: true }]
      });
      return res.json({
        attributes,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_passport__ = __webpack_require__(3);



/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

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
    errors
  };
}

/* GET index. */
router.post('/login', (req, res, next) => {
  const validation = validate({
    username: req.param('username'),
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* POST scratch. */
router.post('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const modelId = req.param('model');

    try {
      const newestEntry = yield Entry.findOne({
        where: {
          ModelId: modelId
        },
        order: 'index DESC'
      });

      const index = (newestEntry ? newestEntry.index : 0) + 1;

      const attributes = yield Attribute.findAll({
        where: {
          ModelId: modelId
        }
      });

      let entry = yield Entry.create({
        index,
        ModelId: modelId
      });

      const valuePromises = [];
      for (const attribute of attributes) {
        valuePromises.push(Value.create({
          EntryId: entry.id,
          AttributeId: attribute.id,
          value: ''
        }));
      }
      yield Promise.all(valuePromises);

      entry = yield Entry.findOne({
        where: {
          id: entry.id
        },
        include: [{ all: true }]
      });

      const response = {
        entry,
        success: true
      };
      return res.json(response);
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.get('/', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      const modelId = req.param('model');
      const entries = yield Entry.findAll({
        where: {
          ModelId: modelId
        },
        include: [{ all: true }]
      });
      return res.json({
        entries,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.delete('/', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      const id = req.param('id');

      yield Value.destroy({
        where: {
          EntryId: id
        }
      });

      yield Entry.destroy({
        where: {
          id
        }
      });

      return res.json({
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);



/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/models', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models__["User"].findAll({
    include: [__WEBPACK_IMPORTED_MODULE_1__models__["Service"]]
  }).then(users => {
    res.send(users);
  });
});

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_utils__ = __webpack_require__(2);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* POST scratch. */
router.post('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const serviceId = req.param('service');
    const name = req.param('name');

    try {
      const model = yield Model.create({
        name,
        handle: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_utils__["a" /* stringToHandle */])(name),
        ServiceId: serviceId
      });

      const response = {
        model,
        success: true
      };
      return res.json(response);
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.patch('/:id', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    const newName = req.param('name');
    const modelId = req.param('id');

    try {
      const model = yield Model.update({
        name: newName,
        handle: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_utils__["a" /* stringToHandle */])(newName)
      }, { where: { id: modelId } });

      return res.json({
        model,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.get('/', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      const serviceId = req.param('service');
      const model = yield Model.findAll({
        where: {
          ServiceId: serviceId
        },
        include: [{ all: true }]
      });
      return res.json({
        model,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_parse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_4__models__["a" /* default */];

const upload = __WEBPACK_IMPORTED_MODULE_1_multer___default()({ dest: 'upload/' });

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/parseText', (req, res) => {
  const text = req.param('text');
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_parse__["a" /* parseNaturalLanguage */])(text).then(result => res.send(result));
});

router.post('/parseSpreadsheet', upload.single('spreadsheet'), (req, res) => {
  console.log(req.file);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_parse__["b" /* parseSpreadsheet */])(req.file).then(result => res.send(result));
});

/* POST scratch. */
router.post('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const name = req.param('name');
    const modelDefinitions = req.param('models');

    try {
      const service = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__components_service__["a" /* createService */])(name, modelDefinitions, req.user.id);

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

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.get('/', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      const services = yield Service.findAll({
        where: {
          UserId: req.user.id
        },
        include: [{ all: true, nested: true }]
      });
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

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.get('/:id', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      const serviceId = req.param('id');
      const service = yield Service.findOne({
        where: {
          id: serviceId,
          UserId: req.user.id
        },
        include: [{ all: true, nested: true }]
      });
      return res.json({
        service,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

router.patch('/:id', (() => {
  var _ref4 = _asyncToGenerator(function* (req, res) {
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

      const service = yield Service.update(toUpdate, { where: { id: serviceId } });
      return res.json({
        service,
        success: true
      });
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
})());

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.patch('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const entryId = req.param('entry');
    const attributeId = req.param('attribute');
    const newValue = req.param('value');

    try {
      const [foundValue] = yield Value.findOrCreate({
        where: {
          EntryId: entryId,
          AttributeId: attributeId
        },
        include: [{ all: true }]
      });

      // TODO Validate new value

      const [value] = yield Value.update({ value: newValue }, { where: { id: foundValue.id } });

      const response = {
        value,
        success: true
      };
      return res.json(response);
    } catch (e) {
      return res.status(501).json({
        error: e,
        success: false
      });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("nlp_compromise");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("sbd");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map