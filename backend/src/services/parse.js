import Natural from '../services/natural';

export function parseSpreadsheet(spreadsheets) {
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
      console.log({name, types});
    }

    allModelDefinitions.push(modelDefinition);
  }
}

function mode(array) {
  if (!array || array.length === 0) return null;
  return array.reduce(array[0], (prev, value) => {
    return (value > prev) ? value : prev;
  });
}

// Given a array of type information, determines the type which encompases all values
export function determineType(information) {
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
    required,
  };
}

// Given a string, finds the most likely type
export function findType(string) {
  // If there is no value assume null
  if ((string === null) || (string === undefined)) return null;

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
    example: string,
  }

}

function safeJSONParse(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
}

export function parseNaturalLanguage(text) {
  return Natural.generateModelStructure(text);
}
