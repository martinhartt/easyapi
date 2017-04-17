import { expect } from 'chai';
import { describe, it } from 'mocha';
import Natural from '../src/components/natural';

describe('Natural Service', () => {
  it('should exist', () => {
    /* eslint-disable no-unused-expressions */
    expect(Natural).to.exist;
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

  describe('parse', () => {
    it('should deconstruct a sentence and annotate recognisable entities.', async () => {
      const text = 'Bob brought the pizza to Alice.';

      const result = await Natural.parse(text);

      expect(result).to.exist;
      expect(result.data[0].parse_list.length).to.equal(7);
      expect(result.data[0].noun_phrases.length).to.equal(3);
      expect(result.data[0].text).to.equal('Bob brought the pizza to Alice.');
    });
  });

  describe('find', () => {
    it('should find first modifier in tree which satisfies condition', () => {
      const tree = {
        lemma: 'runs',
        pos: 'VERB',
        modifiers: [
          {
            lemma: 'duck',
            pos: 'NOUN',
            modifiers: [
              {
                lemma: 'yellow',
                pos: 'ADJ',
                modifiers: [],
              },
            ],
          },
        ],
      };

      const expected = {
        lemma: 'yellow',
        pos: 'ADJ',
        modifiers: [],
      };

      const result = Natural._find(tree, o => o.lemma === 'yellow');
      expect(result).to.deep.equal(expected);
    });
  });

  describe('filterTree', () => {
    it('should remove nodes which don\'t match a condition', () => {
      const tree = {
        pos: 'VBZ',
        modifiers: [
          {
            pos: 'JJ',
          },
          {
            pos: 'NN',
          },
        ],
      };

      const result = Natural._filterTree(tree, o => o.pos != 'JJ');

      const expected = {
        pos: 'VBZ',
        modifiers: [
          {
            modifiers: undefined,
            pos: 'NN',
          },
        ],
      };
      expect(result).to.deep.equal(expected);
    });

    it('should keep child nodes which match the condition', () => {
      const tree = {
        pos: 'VBZ',
        word: 'store',
        modifiers: [
          {
            pos: 'IN',
            word: 'about',
            modifiers: [
              {
                pos: 'NN',
                word: 'movies',
              },
            ],
          },
          {
            pos: 'NN',
            word: 'information',
          },
        ],
      };

      const result = Natural._filterTree(tree, o => o.pos != 'IN');
      const expected = {
        pos: 'VBZ',
        word: 'store',
        modifiers: [
          {
            pos: 'NN',
            word: 'movies',
            modifiers: undefined,
          },
          {
            pos: 'NN',
            word: 'information',
            modifiers: undefined,
          },
        ],
      };
      expect(result).to.deep.equal(expected);
    });

    it('should not alter the original tree', () => {
      const tree = {
        pos: 'VBZ',
        word: 'store',
        modifiers: [
          {
            pos: 'IN',
            word: 'about',
            modifiers: [
              {
                pos: 'NN',
                word: 'movies',
              },
            ],
          },
          {
            pos: 'NN',
            word: 'information',
          },
        ],
      };

      const copy = JSON.parse(JSON.stringify(tree));
      const result = Natural._filterTree(tree, o => o.pos != 'IN');
      expect(tree).to.deep.equal(copy);
    });
  });

  describe('findAll', () => {
    it('should find all modifiers in tree which satisfy a condition', () => {
      const tree = {
        lemma: 'runs',
        pos: 'VERB',
        modifiers: [
          {
            lemma: 'duck',
            pos: 'NOUN',
            modifiers: [
              {
                lemma: 'yellow',
                pos: 'ADJ',
                modifiers: [],
              },
              {
                lemma: 'happy',
                pos: 'ADJ',
                modifiers: [],
              },
            ],
          },
        ],
      };

      const expected = [
        {
          lemma: 'happy',
          pos: 'ADJ',
          modifiers: [],
        },
        {
          lemma: 'yellow',
          pos: 'ADJ',
          modifiers: [],
        },
      ];

      const result = Natural._findAll(tree, o => o.pos === 'ADJ');
      expect(result).to.deep.equal(expected);
    });
  });

  describe('findIfPropertyIsRequired', () => {
    it('should deduce a property is not required when no information is given', () => {
      const prop = {
        lemma: 'cat',
        modifiers: [],
      };

      const context = {
        lemma: 'play',
        modifiers: [],
      };

      const result = Natural._findIfPropertyIsRequired(prop, context);
      expect(result).to.equal(false);
    });

    it('should deduce a property is required when there is only required keywords', () => {
      const prop = {
        lemma: 'cat',
        modifiers: [],
      };

      const context = {
        lemma: 'play',
        modifiers: [
          { lemma: 'must', arc: 'aux' },
        ],
      };

      const result = Natural._findIfPropertyIsRequired(prop, context);
      expect(result).to.equal(true);
    });

    it('should deduce a property is not required when there are only optional keywords', () => {
      const prop = {
        lemma: 'cat',
        modifiers: [],
      };

      const context = {
        lemma: 'play',
        modifiers: [
          { lemma: 'might', arc: 'aux' },
        ],
      };

      const result = Natural._findIfPropertyIsRequired(prop, context);
      expect(result).to.equal(false);
    });

    it('should deduce a property is required when there are more required keywords than optional keywords', () => {
      const prop = {
        lemma: 'cat',
        modifiers: [],
      };

      const context = {
        lemma: 'play',
        modifiers: [
          { lemma: 'might', arc: 'aux' },
          { lemma: 'needs', arc: 'aux' },
          { lemma: 'must', arc: 'aux' },
        ],
      };

      const result = Natural._findIfPropertyIsRequired(prop, context);
      expect(result).to.equal(true);
    });

    it('should deduce a property is not required when there are more optional keywords than required keywords', () => {
      const prop = {
        lemma: 'cat',
        modifiers: [],
      };

      const context = {
        lemma: 'play',
        modifiers: [
          { lemma: 'might', arc: 'aux' },
          { lemma: 'may', arc: 'aux' },
          { lemma: 'could', arc: 'aux' },
          { lemma: 'needs', arc: 'aux' },
          { lemma: 'must', arc: 'aux' },
        ],
      };

      const result = Natural._findIfPropertyIsRequired(prop, context);
      expect(result).to.equal(false);
    });
  });

  describe('findIfPropertyHasMultiple', () => {
    it('should determine its singular if no information is given', () => {
      const prop = {
        lemma: 'cat',
        modifiers: [],
      };

      const result = Natural._findIfPropertyHasMultiple(prop);
      expect(result).to.equal(false);
    });

    it('should determine its multiple if word is plural', () => {
      const prop = {
        lemma: 'cats',
        POS_fine: 'NNS',
        modifiers: [],
      };

      const result = Natural._findIfPropertyHasMultiple(prop);
      expect(result).to.equal(true);
    });

    it('should determine its multiple if prop has modifiers with plural keywords', () => {
      ['det', 'amod'].forEach((arc) => {
        const prop = {
          lemma: 'cats',
          POS_fine: 'NN',
          modifiers: [
            { arc, lemma: 'many' },
          ],
        };

        const result = Natural._findIfPropertyHasMultiple(prop);
        expect(result).to.equal(true);
      });
    });

    it('should determine its singular if prop has modifiers with singular keywords', () => {
      ['det', 'amod'].forEach((arc) => {
        const prop = {
          lemma: 'cats',
          POS_fine: 'NN',
          modifiers: [
            { arc, lemma: 'single' },
          ],
        };

        const result = Natural._findIfPropertyHasMultiple(prop);
        expect(result).to.equal(false);
      });
    });

    it('should determine its singular if prop has modifiers with singular keywords', () => {
      ['det', 'amod'].forEach((arc) => {
        const prop = {
          lemma: 'cats',
          POS_fine: 'NN',
          modifiers: [
            { arc, lemma: 'single' },
          ],
        };

        const result = Natural._findIfPropertyHasMultiple(prop);
        expect(result).to.equal(false);
      });
    });

    it('should determine its singular if prop has singular number', () => {
      ['zero', 'one'].forEach((lemma) => {
        const prop = {
          lemma: 'cats',
          POS_fine: 'NN',
          modifiers: [
            { arc: 'nummod', lemma },
          ],
        };

        const result = Natural._findIfPropertyHasMultiple(prop);
        expect(result).to.equal(false);
      });
    });

    it('should determine its singular if prop has singular number', () => {
      ['twenty two', 'nine', 'fifty', 'ten thousand'].forEach((lemma) => {
        const prop = {
          lemma: 'cats',
          POS_fine: 'NN',
          modifiers: [
            { arc: 'nummod', lemma },
          ],
        };

        const result = Natural._findIfPropertyHasMultiple(prop);
        expect(result).to.equal(true);
      });
    });
  });

  describe('generateModelStructure', () => {
    it('should correctly analyse basic Pet model structure', async () => {
      const text = 'A pet has a name, breed and owner. The Owner has a name. The owner owns a pet. Toy has a name. Pet likes a toy.';

      const modelStructure = await Natural.generateModelStructure(text);

      const expected = [
        {
          name: 'pet',
          raw: 'pet',
          attributes: [
            {
              type: 'string',
              name: 'name',
              raw: 'name',
              lemma: 'name',
              required: false,
              multiple: false,
            },
            {
              type: 'string',
              name: 'breed',
              raw: 'breed',
              lemma: 'breed',
              required: false,
              multiple: false,
            },
            {
              type: 'Owner',
              name: 'owner',
              raw: 'owner',
              lemma: 'owner',
              required: false,
              multiple: false,
            },
            {
              type: 'Toy',
              name: 'likes toy',
              raw: 'toy',
              lemma: 'toy',
              required: false,
              multiple: false,
            },
          ],
        },
        {
          name: 'owner',
          raw: 'Owner',
          attributes: [
            {
              type: 'string',
              name: 'name',
              raw: 'name',
              lemma: 'name',
              required: false,
              multiple: false,
            },
            {
              type: 'Pet',
              name: 'owns pet',
              raw: 'pet',
              lemma: 'pet',
              required: false,
              multiple: false,
            },
          ],
        },
        {
          name: 'toy',
          raw: 'Toy',
          attributes: [
            {
              type: 'string',
              name: 'name',
              raw: 'name',
              lemma: 'name',
              required: false,
              multiple: false,
            },
          ],
        },
      ];

      expect(modelStructure).to.deep.equal(expected);
    });
  });
});
