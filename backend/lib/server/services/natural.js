'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var generateModelStructure = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(text) {
    var parseResult, modelStructure, allEntities, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _loop3, _iterator9, _step9;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return parse(text);

          case 2:
            parseResult = _context.sent;
            modelStructure = [];
            allEntities = [];

            // Useful transformations
            // Remove oxford comma!

            _iteratorNormalCompletion9 = true;
            _didIteratorError9 = false;
            _iteratorError9 = undefined;
            _context.prev = 8;

            _loop3 = function _loop3() {
              var sentenceResult = _step9.value;

              // Find potential entities
              // const potentialEntities = sentenceResult.parse_list
              // .filter(word => word.POS_coarse === 'NOUN');

              // Find relationships
              var potentialRelationships = sentenceResult.parse_list.filter(function (word) {
                return word.POS_coarse === 'VERB';
              });

              // Id each word

              // TODO Fix duplicates
              // Build up tree of words to their place in parse tree
              var tokens = sentenceResult.tokens;
              var treeIndex = {};
              tokens.forEach(function (token) {
                treeIndex[token] = find(sentenceResult.parse_tree[0], function (obj) {
                  return obj.word === token;
                });
              });

              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = undefined;

              try {
                for (var _iterator10 = potentialRelationships[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var relationship = _step10.value;

                  // First containment
                  var inTree = treeIndex[relationship.word];

                  // Find subject and object

                  var _inTree$modifiers$fil = inTree.modifiers.filter(function (o) {
                    return o.arc === 'nsubj';
                  }),
                      _inTree$modifiers$fil2 = _slicedToArray(_inTree$modifiers$fil, 1),
                      subject = _inTree$modifiers$fil2[0];

                  var _inTree$modifiers$fil3 = inTree.modifiers.filter(function (o) {
                    return o.arc === 'dobj';
                  }),
                      _inTree$modifiers$fil4 = _slicedToArray(_inTree$modifiers$fil3, 1),
                      object = _inTree$modifiers$fil4[0];

                  var properties = [];
                  if (object) {
                    // This is the properties
                    properties = [object].concat(_toConsumableArray(getConjuctions(object)));
                  }
                  var entities = [];
                  if (subject) {
                    // This is entities
                    entities = [subject].concat(_toConsumableArray(getConjuctions(subject)));
                    allEntities = [].concat(_toConsumableArray(allEntities), _toConsumableArray(entities));
                  }

                  var propertiesWithTypes = [];
                  var _iteratorNormalCompletion11 = true;
                  var _didIteratorError11 = false;
                  var _iteratorError11 = undefined;

                  try {
                    for (var _iterator11 = properties[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                      var property = _step11.value;

                      propertiesWithTypes.push(categoriseProp(property, inTree, relationship, entities));
                    }
                  } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                      }
                    } finally {
                      if (_didIteratorError11) {
                        throw _iteratorError11;
                      }
                    }
                  }

                  var _iteratorNormalCompletion12 = true;
                  var _didIteratorError12 = false;
                  var _iteratorError12 = undefined;

                  try {
                    var _loop4 = function _loop4() {
                      var entity = _step12.value;

                      var existingEntity = modelStructure.find(function (s) {
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
                    };

                    for (var _iterator12 = entities[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                      _loop4();
                    }
                  } catch (err) {
                    _didIteratorError12 = true;
                    _iteratorError12 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                      }
                    } finally {
                      if (_didIteratorError12) {
                        throw _iteratorError12;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10.return) {
                    _iterator10.return();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
              }
            };

            for (_iterator9 = parseResult.data[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              _loop3();
            }

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](8);
            _didIteratorError9 = true;
            _iteratorError9 = _context.t0;

          case 17:
            _context.prev = 17;
            _context.prev = 18;

            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }

          case 20:
            _context.prev = 20;

            if (!_didIteratorError9) {
              _context.next = 23;
              break;
            }

            throw _iteratorError9;

          case 23:
            return _context.finish(20);

          case 24:
            return _context.finish(17);

          case 25:
            postprocess(modelStructure, allEntities);
            return _context.abrupt('return', modelStructure);

          case 27:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 13, 17, 25], [18,, 20, 24]]);
  }));

  return function generateModelStructure(_x2) {
    return _ref.apply(this, arguments);
  };
}();

require('babel-polyfill');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _nlp_compromise = require('nlp_compromise');

var _nlp_compromise2 = _interopRequireDefault(_nlp_compromise);

var _sbd = require('sbd');

var _natural = require('natural');

var _pos = require('pos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Natural Service: A service for extracting information from natural speech.
 */

// import WordNet from 'node-wordnet';


var tokenizer = new _natural.WordTokenizer();
// const wordNet = new WordNet();
var tagger = new _pos.Tagger();

// Seperates a text into seperate sentences
function seperateSentences(text) {
  return (0, _sbd.sentences)(text); // text.split(/\. ?/);
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
  return _requestPromise2.default.post('http://localhost:5000/parse', {
    form: {
      text: text.split(/\. ?/).join('<#SENT_SEPERATOR#>')
    }
  }).then(function (res) {
    return JSON.parse(res);
  });
}

function find(object, condition) {
  if (condition(object)) return object;

  if (!object || !object.modifiers || object.modifiers.length === 0) return null;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = object.modifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      var result = find(child, condition);
      if (result) return result;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}

function findAll(object, condition) {
  console.log(object);
  var found = [];
  if (condition(object)) found.push(object);

  if (!object || !object.modifiers || object.modifiers.length === 0) return found;

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = object.modifiers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var child = _step2.value;

      var result = findAll(child, condition);
      if (result.length) found = [].concat(_toConsumableArray(result), _toConsumableArray(found));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  console.log(found);
  return found;
}

// From an array of booleans decide the final value
function decide(values) {
  if (values.length === 0) return null;

  var average = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var value = _step3.value;

      average += Number(value);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return average / values.length >= 0.5;
}

// Finds the existance of property. Returns string of 'required', 'optional', 'unknown'
function findRequired(prop, context) {
  // console.log(prop);
  // https://en.wikipedia.org/wiki/Auxiliary_verb
  var optionalKeywords = ['may', 'might', 'could', 'should', 'maybe', 'possible', 'possibly', 'optionally', 'optional', 'ought'];
  var requiredKeywords = ['must', 'needs', 'need', 'shall', 'will'];

  var allRequiredInformation = [];

  // Find if the relationship has monads attached
  if (!context.modifiers || !context.modifiers.length) return false;
  var monads = context.modifiers.filter(function (o) {
    return o.arc === 'aux';
  });

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    var _loop = function _loop() {
      var monad = _step4.value;

      if (optionalKeywords.find(function (k) {
        return k === monad.lemma;
      })) {
        allRequiredInformation.push(false);
      } else if (requiredKeywords.find(function (k) {
        return k === monad.lemma;
      })) {
        allRequiredInformation.push(true);
      }
    };

    for (var _iterator4 = monads[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return decide(allRequiredInformation);
}

function findMultiple(prop) {
  var determiners = prop.modifiers.filter(function (o) {
    return o.arc === 'det';
  });
  var adjModifiers = prop.modifiers.filter(function (o) {
    return o.arc === 'amod';
  });
  var numModifiers = prop.modifiers.filter(function (o) {
    return o.arc === 'nummod';
  });

  var combined = determiners.concat(adjModifiers).concat(numModifiers);
  // console.log(prop.lemma, ' findupper ', combined);

  // If the noun is plural then it will be multiple
  if (prop.POS_fine === 'NNS') {
    return true;
  }

  // Find all information related to upper bound
  var allCardinalityInfo = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    var _loop2 = function _loop2() {
      var modifier = _step5.value;

      var singleKeywords = ['a', 'single', 'one'];
      var multipleKeywords = ['many', 'multiple', 'several'];
      // const singleNumbers = ['one', 'zero'];

      if (modifier.arc === 'nummod') {
        var number = parseInt(modifier.lemma, 10);
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

      if (singleKeywords.find(function (k) {
        return k === modifier.lemma;
      })) {
        allCardinalityInfo.push(false);
      } else if (multipleKeywords.find(function (k) {
        return k === modifier.lemma;
      })) {
        allCardinalityInfo.push(true);
      }
    };

    for (var _iterator5 = combined[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return decide(allCardinalityInfo);
}

function propertyName(prop, relationship, multiple) {
  var entity = '';

  var correctedNoun = multiple ? _nlp_compromise2.default.noun(prop.lemma).pluralize() : _nlp_compromise2.default.noun(prop.lemma).singularize();

  var compounds = findAll(prop, function (m) {
    return m.arc === 'compound';
  });

  if (compounds.length) {
    entity = compounds.map(function (c) {
      return c.lemma;
    }).join('_') + '_' + correctedNoun;
  } else {
    entity = correctedNoun;
  }

  if (relationship.lemma === 'have') {
    return entity;
  }

  var presentVerb = _nlp_compromise2.default.verb(relationship.word).to_present();

  return presentVerb + '_' + entity;
}

var capitalizeWord = function capitalizeWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function propertyType(prop) {
  var entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = entities[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var entity = _step6.value;

      if (entity.raw === prop.raw || entity.lemma === prop.lemma) {
        return capitalizeWord(entity.lemma);
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return 'string';
}

function categoriseProp(prop, context, relationship, entities) {
  var hasMultiple = findMultiple(prop);
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

  var _object$modifiers$fil = object.modifiers.filter(function (o) {
    return o.arc === 'conj';
  }),
      _object$modifiers$fil2 = _slicedToArray(_object$modifiers$fil, 1),
      conjunction = _object$modifiers$fil2[0];

  var deeperConjuctions = getConjuctions(conjunction);

  if (deeperConjuctions.length) {
    return [conjunction].concat(_toConsumableArray(deeperConjuctions));
  }
  if (conjunction) {
    return [conjunction];
  }
  return [];
}

function postprocess(modelStructure, entities) {
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = modelStructure[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var models = _step7.value;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = models.properties[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var prop = _step8.value;

          prop.type = propertyType(prop, entities);
          console.log('postprocess', propertyType(prop, entities));
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }
}

var Natural = {
  seperateSentences: seperateSentences,
  tokenize: tokenize,
  generateModelStructure: generateModelStructure,
  findPartsOfSpeech: findPartsOfSpeech,
  parse: parse
};

exports.default = Natural;