'use strict';

var _chai = require('chai');

var _mocha = require('mocha');

var _natural = require('../../../server/services/natural');

var _natural2 = _interopRequireDefault(_natural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _mocha.describe)('Natural Service', function () {
  (0, _mocha.it)('should exist', function () {
    /* eslint-disable no-unused-expressions */
    (0, _chai.expect)(_natural2.default).to.exist;
  });

  (0, _mocha.describe)('tokenize', function () {
    (0, _mocha.it)('should correctly seperate a string into the corresponding tokens', function () {
      var text = 'It should also store the Owner’s name and pet';
      var expected = ['It', 'should', 'also', 'store', 'the', 'Owner', 's', 'name', 'and', 'pet'];

      (0, _chai.expect)(_natural2.default.tokenize(text)).to.deep.equal(expected);
    });
  });

  (0, _mocha.describe)('findPartsOfSpeech', function () {
    (0, _mocha.it)('should correctly identify the parts of speech of individual tokens', function () {
      var tokens = ['It', 'should', 'also', 'store', 'the', 'Owner', 's', 'name', 'and', 'pet'];

      var result = _natural2.default.findPartsOfSpeech(tokens);
      var expected = [['It', 'PRP'], ['should', 'MD'], ['also', 'RB'], ['store', 'NN'], ['the', 'DT'], ['Owner', 'NN'], ['s', 'PRP'], ['name', 'NN'], ['and', 'CC'], ['pet', 'NN']];

      (0, _chai.expect)(result).to.deep.equal(expected);
    });
  });

  (0, _mocha.describe)('wordNetDefinition', function () {
    (0, _mocha.it)('should give the correct definition from wordnet', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var result, expected;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _natural2.default.wordNetDefinition('node', 'NN', ['network']);

            case 2:
              result = _context.sent;
              expected = {
                synsetOffset: 3827107,
                lexFilenum: 6,
                pos: 'n',
                wCnt: 3,
                lemma: 'node',
                synonyms: ['node', 'client', 'guest'],
                lexId: '0',
                ptrs: [{
                  pointerSymbol: '@',
                  synsetOffset: 3082979,
                  pos: 'n',
                  sourceTarget: '0000'
                }, { pointerSymbol: '#p',
                  synsetOffset: 3085333,
                  pos: 'n',
                  sourceTarget: '0000'
                }, { pointerSymbol: ';c',
                  synsetOffset: 6128570,
                  pos: 'n',
                  sourceTarget: '0000'
                }],
                gloss: '(computer science) any computer that is hooked up to a computer network  ',
                def: '(computer science) any computer that is hooked up to a computer network  ',
                exp: []
              };


              (0, _chai.expect)(result).to.deep.equal(expected);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });

  (0, _mocha.describe)('findHypernym', function () {
    (0, _mocha.it)('should correctly find the hypernym for a given word', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var result, expected;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _natural2.default.findHypernym('frog', 'NN', ['amphibians', 'tailless', 'leaping']);

            case 2:
              result = _context2.sent;
              expected = {
                synsetOffset: 1627424,
                lexFilenum: 5,
                pos: 'n',
                wCnt: 1,
                lemma: 'amphibian',
                synonyms: ['amphibian'],
                lexId: '0',
                ptrs: [{
                  pointerSymbol: '@',
                  synsetOffset: 1471682,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '#m',
                  synsetOffset: 1625747,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '+',
                  synsetOffset: 2831979,
                  pos: 'a',
                  sourceTarget: '0102'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1627976,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1628331,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1628770,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1629276,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1639765,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1655344,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '~',
                  synsetOffset: 1655951,
                  pos: 'n',
                  sourceTarget: '0000'
                }, {
                  pointerSymbol: '%p',
                  synsetOffset: 2465929,
                  pos: 'n',
                  sourceTarget: '0000'
                }],
                gloss: 'cold-blooded vertebrate typically living on land but breeding in water; aquatic larvae undergo metamorphosis into adult form  ',
                def: 'cold-blooded vertebrate typically living on land but breeding in water',
                exp: ['aquatic larvae undergo metamorphosis into adult form']
              };


              (0, _chai.expect)(result).to.deep.equal(expected);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })));
  });

  (0, _mocha.describe)('seperateSentences', function () {
    (0, _mocha.it)('should correctly seperate a string into different sentences', function () {
      var text = 'On Jan. 20, former Sen. Barack Obama became the 44th\n      President of the U.S. Millions attended the Inauguration.';

      var expected = ['On Jan. 20, former Sen. Barack Obama became the 44th \n President of the U.S.', 'Millions attended the Inauguration.'];

      (0, _chai.expect)(_natural2.default.seperateSentences(text)).to.deep.equal(expected);
    });
  });

  (0, _mocha.describe)('parseSentence', function () {
    (0, _mocha.it)('should deconstruct a sentence and annotate recognisable entities.', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    })));
  });

  (0, _mocha.describe)('generateModelStructure', function () {
    (0, _mocha.it)('should correctly analyse basic Pet model structure', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var text, modelStructure, expected;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              text = 'It should save information about Pets\n        including their name, breed and owner. It should also\n        store the Owner\u2019s name and pet. The owner owns it\u2019s pet.\n        toy has a name. Each pet plays with toys.';
              _context4.next = 3;
              return _natural2.default.generateModelStructure(text);

            case 3:
              modelStructure = _context4.sent;
              expected = {
                Pet: {
                  name: {
                    type: 'string',
                    lowerBound: {
                      lessThan: false,
                      equal: false,
                      moreThan: true,
                      quantity: 1
                    },
                    upperBound: {
                      lessThan: true,
                      equal: false,
                      moreThan: false,
                      quantity: 1
                    }
                  },
                  breed: {
                    type: 'string'
                  },
                  owner: {
                    type: 'Owner'
                  },
                  plays: {
                    type: '[Toys]'
                  }
                },
                Owner: {
                  name: {
                    type: 'string'
                  },
                  owns: {
                    type: 'Pet'
                  }
                },
                Toy: {
                  name: {
                    type: 'string'
                  }
                }
              };


              console.log(modelStructure, expected);
              // expect(modelStructure).to.equal(expected);

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    })));
  });
});