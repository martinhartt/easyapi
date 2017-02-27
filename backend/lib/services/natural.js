import request from 'request-promise';
import compromise from 'nlp_compromise';

/**
 * Natural Service: A service for extracting information from natural speech.
 */
import { sentences as seperateSentences } from 'sbd';
import { WordTokenizer } from 'natural';
import { Tagger } from 'pos';

const tokenizer = new WordTokenizer();
const tagger = new Tagger();

// Uses spacy to deconstruct text into a dependancy parse tree
function parse(text) {

  return request.post('http://localhost:5000/parse', {
    form: {
      text: seperateSentences(text).join('<#SENT_SEPERATOR#>')
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

function propertyName(prop, relationship, multiple) {
  let entity = '';

  const correctedNoun = multiple ? compromise.noun(prop.lemma).pluralize() : compromise.noun(prop.lemma).singularize();

  const compounds = findAll(prop, m => m.arc === 'compound');

  if (compounds.length) {
    entity = `${compounds.map(c => c.lemma).join('_')}_${correctedNoun}`;
  } else {
    entity = correctedNoun;
  }

  if (relationship.lemma === 'have') {
    return entity;
  }

  const presentVerb = compromise.verb(relationship.word).to_present();

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

async function generateModelStructure(text) {
  // Annotate raw text with POS and get dependency structure
  const parseResult = await parse(text);
  const modelStructure = [];
  let allEntities = [];

  // Useful transformations
  // Remove oxford comma!

  for (const sentenceResult of parseResult.data) {
    // Find potential entities
    // const potentialEntities = sentenceResult.parse_list
    // .filter(word => word.POS_coarse === 'NOUN');

    // Find relationships
    const potentialRelationships = sentenceResult.parse_list.filter(word => word.POS_coarse === 'VERB');

    // Id each word

    // TODO Fix duplicates
    // Build up tree of words to their place in parse tree
    const tokens = sentenceResult.tokens;
    const treeIndex = {};
    tokens.forEach(token => {
      treeIndex[token] = find(sentenceResult.parse_tree[0], obj => obj.word === token);
    });

    for (const relationship of potentialRelationships) {
      // First containment
      const inTree = treeIndex[relationship.word];

      // Find subject and object
      const [subject] = inTree.modifiers.filter(o => o.arc === 'nsubj');
      const [object] = inTree.modifiers.filter(o => o.arc === 'dobj');

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
        const existingEntity = modelStructure.find(s => s.name === entity.lemma);

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
}

const Natural = {
  _find: find,
  _findAll: findAll,
  _findIfPropertyIsRequired: findIfPropertyIsRequired,
  _findIfPropertyHasMultiple: findIfPropertyHasMultiple,
  seperateSentences,
  generateModelStructure,
  parse
};

export default Natural;