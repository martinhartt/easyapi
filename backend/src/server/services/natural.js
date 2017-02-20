import 'babel-polyfill';
import request from 'request-promise';
import compromise from 'nlp_compromise';

/**
 * Natural Service: A service for extracting information from natural speech.
 */
import { sentences as sentenceTokenizer } from 'sbd';
import { WordTokenizer } from 'natural';
// import WordNet from 'node-wordnet';
import { Tagger } from 'pos';

const tokenizer = new WordTokenizer();
// const wordNet = new WordNet();
const tagger = new Tagger();

// Seperates a text into seperate sentences
function seperateSentences(text: string) {
  return sentenceTokenizer(text); // text.split(/\. ?/);
}

// Splits text into seperate tokens
function tokenize(text: string) {
  return tokenizer.tokenize(text);
}

function findPartsOfSpeech(tokens: [string]) {
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

function parse(text: string) {
  return request.post('http://localhost:5000/parse', {
    form: {
      text: text.split(/\. ?/).join('<#SENT_SEPERATOR#>'),
    },
  })
  .then(res => JSON.parse(res));
}

function find(object: { modifiers: [any] }, condition: Function) {
  if (condition(object)) return object;

  if (!object || !object.modifiers || object.modifiers.length === 0) return null;
  for (const child of object.modifiers) {
    const result = find(child, condition);
    if (result) return result;
  }
  return null;
}

function findAll(object: { modifiers: [any] }, condition: Function) {
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


  const correctedNoun = multiple ?
    compromise.noun(prop.lemma).pluralize() :
    compromise.noun(prop.lemma).singularize();

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
  const hasMultiple = findMultiple(prop);
  return {
    type: propertyType(prop, entities),
    name: propertyName(prop, relationship, hasMultiple),
    raw: prop.word,
    lemma: prop.lemma,
    required: findRequired(prop, context),
    multiple: hasMultiple,
  };
}

function getConjuctions(object) {
  if (!object || !object.modifiers || object.modifiers.length === 0) return [];

  const [conjunction] = object.modifiers.filter(o => o.arc === 'conj');
  const deeperConjuctions = getConjuctions(conjunction);

  if (deeperConjuctions.length) {
    return [
      conjunction,
      ...deeperConjuctions,
    ];
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

async function generateModelStructure(text: string) {
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
    const potentialRelationships = sentenceResult.parse_list
      .filter(word => word.POS_coarse === 'VERB');

    // Id each word

    // TODO Fix duplicates
    // Build up tree of words to their place in parse tree
    const tokens = sentenceResult.tokens;
    const treeIndex = {};
    tokens.forEach((token) => {
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
            properties: propertiesWithTypes,
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
}


const Natural = {
  seperateSentences,
  tokenize,
  generateModelStructure,
  findPartsOfSpeech,
  parse,
};

export default Natural;
