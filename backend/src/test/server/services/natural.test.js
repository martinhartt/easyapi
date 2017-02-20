import { expect } from 'chai';
import { describe, it } from 'mocha';
import Natural from '../../../server/services/natural';

describe('Natural Service', () => {
  it('should exist', () => {
    /* eslint-disable no-unused-expressions */
    expect(Natural).to.exist;
  });

  describe('tokenize', () => {
    it('should correctly seperate a string into the corresponding tokens', () => {
      const text = 'It should also store the Owner’s name and pet';
      const expected = ['It', 'should', 'also', 'store', 'the', 'Owner', 's', 'name', 'and', 'pet'];

      expect(Natural.tokenize(text)).to.deep.equal(expected);
    });
  });

  describe('findPartsOfSpeech', () => {
    it('should correctly identify the parts of speech of individual tokens', () => {
      const tokens = ['It', 'should', 'also', 'store', 'the', 'Owner', 's', 'name', 'and', 'pet'];

      const result = Natural.findPartsOfSpeech(tokens);
      const expected = [
        ['It', 'PRP'],
        ['should', 'MD'],
        ['also', 'RB'],
        ['store', 'NN'],
        ['the', 'DT'],
        ['Owner', 'NN'],
        ['s', 'PRP'],
        ['name', 'NN'],
        ['and', 'CC'],
        ['pet', 'NN'],
      ];

      expect(result).to.deep.equal(expected);
    });
  });

  describe('wordNetDefinition', () => {
    it('should give the correct definition from wordnet', async () => {
      const result = await Natural.wordNetDefinition('node', 'NN', ['network']);
      const expected = {
        synsetOffset: 3827107,
        lexFilenum: 6,
        pos: 'n',
        wCnt: 3,
        lemma: 'node',
        synonyms: ['node', 'client', 'guest'],
        lexId: '0',
        ptrs: [
          {
            pointerSymbol: '@',
            synsetOffset: 3082979,
            pos: 'n',
            sourceTarget: '0000',
          },
          { pointerSymbol: '#p',
            synsetOffset: 3085333,
            pos: 'n',
            sourceTarget: '0000',
          },
          { pointerSymbol: ';c',
            synsetOffset: 6128570,
            pos: 'n',
            sourceTarget: '0000',
          },
        ],
        gloss: '(computer science) any computer that is hooked up to a computer network  ',
        def: '(computer science) any computer that is hooked up to a computer network  ',
        exp: [],
      };

      expect(result).to.deep.equal(expected);
    });
  });

  describe('findHypernym', () => {
    it('should correctly find the hypernym for a given word', async () => {
      const result = await Natural.findHypernym('frog', 'NN', ['amphibians', 'tailless', 'leaping']);

      const expected = {
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
          sourceTarget: '0000',
        }, {
          pointerSymbol: '#m',
          synsetOffset: 1625747,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '+',
          synsetOffset: 2831979,
          pos: 'a',
          sourceTarget: '0102',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1627976,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1628331,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1628770,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1629276,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1639765,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1655344,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '~',
          synsetOffset: 1655951,
          pos: 'n',
          sourceTarget: '0000',
        }, {
          pointerSymbol: '%p',
          synsetOffset: 2465929,
          pos: 'n',
          sourceTarget: '0000',
        }],
        gloss: 'cold-blooded vertebrate typically living on land but breeding in water; aquatic larvae undergo metamorphosis into adult form  ',
        def: 'cold-blooded vertebrate typically living on land but breeding in water',
        exp: ['aquatic larvae undergo metamorphosis into adult form'],
      };

      expect(result).to.deep.equal(expected);
    });
  });

  describe('seperateSentences', () => {
    it('should correctly seperate a string into different sentences', () => {
      const text = `On Jan. 20, former Sen. Barack Obama became the 44th
      President of the U.S. Millions attended the Inauguration.`;

      const expected = [
        'On Jan. 20, former Sen. Barack Obama became the 44th \n President of the U.S.',
        'Millions attended the Inauguration.',
      ];

      expect(Natural.seperateSentences(text)).to.deep.equal(expected);
    });
  });

  describe('parseSentence', () => {
    it('should deconstruct a sentence and annotate recognisable entities.', async () => {
      // const text = 'Bob brought the pizza to Alice.';

      // console.log(await Natural.parseSentence(text));
    });
  });

  describe('generateModelStructure', () => {
    it('should correctly analyse basic Pet model structure', async () => {
      const text = `It should save information about Pets
        including their name, breed and owner. It should also
        store the Owner’s name and pet. The owner owns it’s pet.
        toy has a name. Each pet plays with toys.`;

      const modelStructure = await Natural.generateModelStructure(text);

      const expected = {
        Pet: {
          name: {
            type: 'string',
            lowerBound: {
              lessThan: false,
              equal: false,
              moreThan: true,
              quantity: 1,
            },
            upperBound: {
              lessThan: true,
              equal: false,
              moreThan: false,
              quantity: 1,
            },
          },
          breed: {
            type: 'string',
          },
          owner: {
            type: 'Owner',
          },
          plays: {
            type: '[Toys]',
          },
        },
        Owner: {
          name: {
            type: 'string',
          },
          owns: {
            type: 'Pet',
          },
        },
        Toy: {
          name: {
            type: 'string',
          },
        },
      };

      console.log(modelStructure, expected);
      // expect(modelStructure).to.equal(expected);
    });
  });
});
