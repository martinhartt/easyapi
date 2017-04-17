import { intersection } from 'underscore';
import request from 'request-promise';
import compromise from 'nlp_compromise';

/**
 * Natural Service: A service for extracting information from natural speech.
 */
import { sentences as seperateSentences } from 'sbd';

// Uses spacy to deconstruct text into a dependancy parse tree
function parse(text) {
  return request.post('http://localhost:5000/parse', {
    form: {
      text: seperateSentences(text).join('<#SENT_SEPERATOR#>'),
    },
  })
  .then(res => JSON.parse(res));
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
      allCardinalityInfo.push(compromise.value(modifier.lemma).number > 1);
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
  const containmentWords = [
    'have',
    'include',
    'incorporate',
    'consist',
    'comprise',
    'contain',
  ];

  return containmentWords.find(w => w == relationship.lemma);
}

function buildPhrase(tree, transform = w => w, space = ' ') {
  const othersInPhrase = tree.othersInPhrase;

  if (othersInPhrase.length) {
    return [tree, ...othersInPhrase].sort((a, b) => a.start - b.start).map(o => o.word).map(transform).join(space);
  }
  return tree.word;
}

function propertyName(prop, relationship, multiple) {
  let entity = '';

  const correctedNoun = multiple ?
    compromise.noun(prop.lemma).pluralize() :
    compromise.noun(prop.lemma).singularize();


  const othersInPhrase = prop.othersInPhrase;

  entity = buildPhrase(prop);

  if (isContainment(relationship)) {
    return entity;
  }

  const presentVerb = compromise.verb(relationship.word).to_present();

  return `${presentVerb} ${entity}`;
}

const capitalizeWord = str => str.charAt(0).toUpperCase() + str.slice(1);

function propertyType(prop, entities = []) {
  for (const entity of entities) {
    if (entity.raw === prop.raw ||
        entity.lemma === prop.lemma) {
      return capitalizeWord(entity.lemma);
    }
  }

  const propWords = prop.name.split(' ');

  // Check criteria for number.
  const integerKeywords = [
    'number',
    'integer',
    'numbers',
    'integers',
  ];

  const floatKeywords = [
    'float',
    'double',
    'floats',
    'doubles',
    'decimal',
    'decimals',
  ];

  if (intersection(propWords, integerKeywords).length > 0) {
    return 'integer';
  }

  if (intersection(propWords, floatKeywords).length > 0) {
    return 'float';
  }

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
    multiple,
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
    return [
      modifier,
      ...deeperConjuctions,
    ];
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

  const modifiers = flatMap(
    tree.modifiers,
    m => filterTree(m, e => condition(e, depth, tree), depth + 1),
  );

  if (condition(tree)) {
    if (modifiers.length < 1) {
      // delete tree.modifiers;
      return Object.assign(tree, {
        modifiers: undefined,
      });
    }
    return Object.assign(tree, {
      modifiers,
    });
  }
  return modifiers;
}

function assignNounPhrase(p) {
  const preps = findAll(p, o => o.arc === 'prep');
  const prepPhrases = preps.map(
    o => [o, ...(o.modifiers.filter(m => m.arc === 'pobj'))],
  );

  const tags = ['compound', 'amod'];
  const more = findAll(p, m => tags.includes(m.arc));

  p.othersInPhrase = [...flatten(prepPhrases), ...more].sort((a, b) => a.start - b.start);

  return p;
}

async function generateModelStructure(text) {
  // Annotate raw text with POS and get dependency structure
  const parseResult = await parse(text);
  const modelStructure = [];
  let allEntities = [];

  // Useful transformations
  // Remove oxford comma!

  for (const sentenceResult of parseResult.data) {
    // Find relationships
    const potentialRelationships = sentenceResult.parse_list
      .filter(word => word.POS_fine.startsWith('V'));

    // Build up tree of words to their place in parse tree
    const tokens = sentenceResult.parse_list;
    const cleanTree = filterTree(sentenceResult.parse_tree[0], m => m.POS_fine.startsWith('V') || m.POS_fine.startsWith('N') || m.POS_fine === 'PRP');

    const treeIndex = {};
    const cleanTreeIndex = {};
    tokens.forEach((token) => {
      treeIndex[token.id] = find(sentenceResult.parse_tree[0], obj => obj.id === token.id);
      cleanTreeIndex[token.id] = find(cleanTree, obj => obj.id === token.id);
    });

    for (const relationship of potentialRelationships) {
      // First containment
      let inTree = cleanTreeIndex[relationship.id];

      const nounTree = filterTree(inTree, m => m.POS_fine.startsWith('N') || m.POS_fine === 'PRP');
      const compareDepth = (a, b) => a.depth - b.depth;

      if (!nounTree || nounTree.length < 1) continue;
      // Find subject and object
      const [subject] = nounTree.filter(o => o.arc.includes('subj')).sort(compareDepth);
      const [object] = nounTree.filter(o => o.arc.includes('obj')).sort(compareDepth);

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
        const existingEntity = modelStructure.find(s => s.name === entity.lemma);

        if (existingEntity) {
          existingEntity.attributes = existingEntity.attributes.concat(attributesWithTypes);
        } else {
          modelStructure.push({
            name: entity.lemma,
            raw: entity.word,
            attributes: attributesWithTypes,
          });
        }
      }
    }
  }

  postprocess(modelStructure, allEntities);
  return modelStructure;
}


const Natural = {
  _find: find,
  _findAll: findAll,
  _findIfPropertyIsRequired: findIfPropertyIsRequired,
  _findIfPropertyHasMultiple: findIfPropertyHasMultiple,
  _filterTree: filterTree,
  seperateSentences,
  generateModelStructure,
  parse,
};

export default Natural;
