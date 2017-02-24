require('/Users/martinkubat/Work/easyapi/newbackend/node_modules/source-map-support/source-map-support.js').install();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_connections__ = __webpack_require__(4);





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

console.log('?', __dirname);

__WEBPACK_IMPORTED_MODULE_0_fs___default.a.readdirSync(__dirname).filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js').forEach(file => {
  const model = sequelize.import(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = __WEBPACK_IMPORTED_MODULE_2_sequelize___default.a;

/* harmony default export */ __webpack_exports__["a"] = db;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_bootstrap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__config_bootstrap__["a" /* default */])().then(_asyncToGenerator(function* () {
  /* eslint-disable new-cap */
  const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
  const port = 9001;

  yield __WEBPACK_IMPORTED_MODULE_5__models__["a" /* default */].sequelize.sync();

  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

  app.use('/api', __WEBPACK_IMPORTED_MODULE_2__routes_index__["a" /* default */]);
  app.use('/api/service', __WEBPACK_IMPORTED_MODULE_3__routes_service__["a" /* default */]);

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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(1);



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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_natural__ = __webpack_require__(7);



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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nlp_compromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nlp_compromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sbd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sbd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_natural__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_natural___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_natural__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pos__ = __webpack_require__(13);
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
    // function findRequired() {
    //   // console.log(prop);
    //   return {
    //     lessThan: false,
    //     equal: false,
    //     moreThan: true,
    //     quantity: 1,
    //   };
    // }
    //
    // function findMultiple(prop) {
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
    //     lowerBound: findRequired(prop),
    //     upperBound: findMultiple(prop),
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


// import WordNet from 'node-wordnet';


const tokenizer = new __WEBPACK_IMPORTED_MODULE_3_natural__["WordTokenizer"]();
// const wordNet = new WordNet();
const tagger = new __WEBPACK_IMPORTED_MODULE_4_pos__["Tagger"]();

// Seperates a text into seperate sentences
function seperateSentences(text) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_sbd__["sentences"])(text); // text.split(/\. ?/);
}

// Splits text into seperate tokens
function tokenize(text) {
  return tokenizer.tokenize(text);
}

function findPartsOfSpeech(tokens) {
  return tagger.tag(tokens);
}

// async function wordNetDefinition(word: string, pos: string, context: [string]) {
//   const results = await wordNet.lookupAsync(word);
//
//   // Find most likely definition from context array and pos
//   const simplePOS = pos[0].toLowerCase();
//   const filteredResults = results
//     .filter(r => r.pos === simplePOS)
//     .filter(r => r.lemma === word);
//
//   if (context) {
//     const documentSearch = new TfIdf();
//
//     // TODO Stem words from definition and context
//     filteredResults.forEach(result => documentSearch.addDocument(result.gloss));
//
//     let highestMeasure = -1;
//     let mostLikelyResult;
//     documentSearch.tfidfs(context, (i, measure) => {
//       if (measure > highestMeasure) {
//         mostLikelyResult = filteredResults[i];
//         highestMeasure = measure;
//       }
//     });
//
//     return mostLikelyResult;
//   }
//   return filteredResults[0];
// }
//
// async function findHypernym(word: string, pos: string, context: [string]) {
//   const definition = await wordNetDefinition(word, pos, context);
//   if (definition == null) return null;
//
//   const pointer = definition.ptrs.filter(p => p.pointerSymbol === '@')[0];
//
//   const result = await wordNet.getAsync(pointer.synsetOffset, pointer.pos);
//
//   return result;
// }

function parse(text) {
  return __WEBPACK_IMPORTED_MODULE_0_request_promise___default.a.post('http://localhost:5000/parse', {
    form: {
      text: text.split(/\. ?/).join('<#SENT_SEPERATOR#>')
    }
  }).then(res => JSON.parse(res));
}

function find(object, condition) {
  if (condition(object)) return object;

  if (!object || !object.modifiers || object.modifiers.length === 0) return null;
  for (const child of object.modifiers) {
    const result = find(child, condition);
    if (result) return result;
  }
  return null;
}

function findAll(object, condition) {
  console.log(object);
  let found = [];
  if (condition(object)) found.push(object);

  if (!object || !object.modifiers || object.modifiers.length === 0) return found;

  for (const child of object.modifiers) {
    const result = findAll(child, condition);
    if (result.length) found = [...result, ...found];
  }
  console.log(found);
  return found;
}

// From an array of booleans decide the final value
function decide(values) {
  if (values.length === 0) return null;

  let average = 0;
  for (const value of values) {
    average += Number(value);
  }
  return average / values.length >= 0.5;
}

// Finds the existance of property. Returns string of 'required', 'optional', 'unknown'
function findRequired(prop, context) {
  // console.log(prop);
  // https://en.wikipedia.org/wiki/Auxiliary_verb
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

  return decide(allRequiredInformation);
}

function findMultiple(prop) {
  const determiners = prop.modifiers.filter(o => o.arc === 'det');
  const adjModifiers = prop.modifiers.filter(o => o.arc === 'amod');
  const numModifiers = prop.modifiers.filter(o => o.arc === 'nummod');

  const combined = determiners.concat(adjModifiers).concat(numModifiers);
  // console.log(prop.lemma, ' findupper ', combined);

  // If the noun is plural then it will be multiple
  if (prop.POS_fine === 'NNS') {
    return true;
  }

  // Find all information related to upper bound
  const allCardinalityInfo = [];
  for (const modifier of combined) {
    const singleKeywords = ['a', 'single', 'one'];
    const multipleKeywords = ['many', 'multiple', 'several'];
    // const singleNumbers = ['one', 'zero'];

    if (modifier.arc === 'nummod') {
      const number = parseInt(modifier.lemma, 10);
      if (!isNaN(number)) {
        if (number > 1) {
          allCardinalityInfo.push(true);
        } else {
          allCardinalityInfo.push(false);
        }
      } else if (modifier.lemma === 'one' || modifier.lemma === 'zero') {
        allCardinalityInfo.push(false);
      } else {
        allCardinalityInfo.push(true);
      }
    }

    if (singleKeywords.find(k => k === modifier.lemma)) {
      allCardinalityInfo.push(false);
    } else if (multipleKeywords.find(k => k === modifier.lemma)) {
      allCardinalityInfo.push(true);
    }
  }

  return decide(allCardinalityInfo);
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
  const hasMultiple = findMultiple(prop);
  return {
    type: propertyType(prop, entities),
    name: propertyName(prop, relationship, hasMultiple),
    raw: prop.word,
    lemma: prop.lemma,
    required: findRequired(prop, context),
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
      console.log('postprocess', propertyType(prop, entities));
    }
  }
}

const Natural = {
  seperateSentences,
  tokenize,
  generateModelStructure,
  findPartsOfSpeech,
  parse
};

/* harmony default export */ __webpack_exports__["a"] = Natural;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("natural");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("nlp_compromise");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("pos");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("sbd");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map