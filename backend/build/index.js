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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_connections__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attribute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entry__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__issue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__value__ = __webpack_require__(19);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_local__ = __webpack_require__(33);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_passport__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_index__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_model__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_entry__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_attribute__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_value__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__middleware_authentication__ = __webpack_require__(10);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nlp_compromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd__ = __webpack_require__(36);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_natural__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSpreadsheet;
/* unused harmony export determineType */
/* unused harmony export findType */
/* harmony export (immutable) */ __webpack_exports__["a"] = parseNaturalLanguage;


function parseSpreadsheet(spreadsheets) {
  // Assume spreadsheet is array of csv's

  const allModelDefinitions = [];

  for (const csv of spreadsheets) {
    let modelDefinition = {};
    let [headingLine, ...rowLines] = csv.split('\n');
    let headings = headingLine.split(',');
    let rows = rowLines.map(r => r.split(','));

    for (let i = 0; i < headings.length; i++) {
      let name = headings[i];

      let types = new Set(rows.map(row => determineType(row[i])));
      console.log({ name, types });
    }

    allModelDefinitions.push(modelDefinition);
  }
}

function mode(array) {
  if (!array || array.length === 0) return null;
  return array.reduce(array[0], (prev, value) => {
    return value > prev ? value : prev;
  });
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

    if (value.multiple = true) {
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
function findType(string) {
  // If there is no value assume null
  if (string === null || string === undefined) return null;

  let object = safeJSONParse(string);
  let multiple = Array.isArray(object);
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
    if (/^\-?((\d+\.\d*)|(\d+\.\d*))$/.test(string)) {
      type = 'float';
    } else if (/^\-?(\d+)$/.test(string)) {
      type = 'integer';
    } else {
      type = 'string';
    }
  }

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
  return __WEBPACK_IMPORTED_MODULE_0__components_natural__["a" /* default */].generateModelStructure(text);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(0);
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
      UserId: userId
    });

    service = service.toJSON();

    const models = [];

    for (const modelDefinition of modelDefinitions) {
      const model = yield Model.create({
        name: modelDefinition.name,
        ServiceId: service.id
      });

      const modelJSON = model.toJSON();
      const attributes = [];
      const attributeByName = {};

      for (const attributeDefinition of modelDefinition.attributes) {
        const attribute = yield Attribute.create({
          name: attributeDefinition.name,
          type: attributeDefinition.type,
          ModelId: model.id
        });

        attributeByName[attributeDefinition.name] = attribute;
        attributes.push(attribute.toJSON());
      }

      modelJSON.Attributes = attributes;

      if (!modelDefinition.entries || modelDefinition.entries.length === 0) {
        modelJSON.Entries = [];
        models.push(modelJSON);
        continue;
      }

      const entries = [];

      let index = 1;
      for (const entriesDefinition of modelDefinition.entries) {
        const entry = yield Entry.create({
          index,
          ModelId: model.id
        });
        index++;

        const entryJSON = entry.toJSON();
        const values = [];

        for (const attributeString of Object.keys(entriesDefinition)) {
          if (!attributeByName[attributeString]) {
            throw new Error(`Please only specify attributes which are defined in the model (${attributeString}).`);
          }
          const value = yield Value.create({
            AttributeId: attributeByName[attributeString].id,
            value: entriesDefinition[attributeString],
            EntryId: entry.id
          });

          values.push(value.toJSON());
        }

        entryJSON.Values = values;
        entries.push(entryJSON);
      }

      modelJSON.Entries = entries;
      models.push(modelJSON);
    }

    service.Models = models;

    return service;
  });

  return function createService(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(3);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Attribute = sequelize.define('Attribute', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Model = sequelize.define('Model', {
    name: DataTypes.STRING,
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (sequelize, DataTypes) {
  const Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcrypt__ = __webpack_require__(28);
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
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(0);



const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.all('/:service/:model/:id?', (req, res) => {
  const service = req.param('service');
  const model = req.param('model');
  const id = req.param('id');
  const method = req.method;
  console.log(req);

  res.send({ service, model, id, method });
});

/* harmony default export */ __webpack_exports__["a"] = router;

/***/ }),
/* 21 */
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

    try {
      const attribute = yield Attribute.create({
        name,
        type,
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_passport__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__(38);
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

    try {
      const newestEntry = yield Entry.findOne({
        where: {
          ModelId: modelId
        },
        order: 'index DESC'
      });

      const index = (newestEntry ? newestEntry.index : 0) + 1;

      const entry = yield Entry.create({
        index,
        ModelId: modelId
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
/* 24 */
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
    const serviceId = req.param('service');
    const name = req.param('name');

    try {
      const model = yield Model.create({
        name,
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
      const model = yield Model.update({ name: newName }, { where: { id: modelId } });

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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_parse__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const { Service, Model, Attribute, Entry, Value } = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */];

/* eslint-disable new-cap */
const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/parseText', (req, res) => {
  const text = req.param('text');
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__components_parse__["a" /* parseNaturalLanguage */])(text).then(result => res.send(result));
});

router.post('/parseSpreadsheet', (req, res) => {
  const text = req.param('text');
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__components_parse__["b" /* parseSpreadsheet */])(text).then(result => res.send(result));
});

/* POST scratch. */
router.post('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    console.log(req.param('models'));
    const name = req.param('name');
    const modelDefinitions = req.param('models');

    try {
      const service = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* createService */])(name, modelDefinitions, req.user.id);

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
      if (req.param('isPublic')) {
        toUpdate.isPublic = req.param('isPublic');
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("nlp_compromise");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("sbd");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map