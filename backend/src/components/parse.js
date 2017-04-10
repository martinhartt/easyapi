import XLSX from 'xlsx';
import Natural from '../components/natural';
import { object } from 'underscore';

export function parseSpreadsheet(file) {
  // Assume spreadsheet is array of csv's
  const workbook = XLSX.readFile(file.path);

  const sheetNames = workbook.SheetNames;

  const csvs = sheetNames
    .map(name => workbook.Sheets[name])
    .map(sheet => XLSX.utils.sheet_to_csv(sheet));

  const sheetByName = object(sheetNames, csvs);

  const allModelDefinitions = [];

  for (const name of sheetNames) {
    const csv = sheetByName[name];
    const modelDefinition = {};
    const [headingLine, ...rowLines] = csv.split('\n');
    const headings = headingLine.split(',');
    const rows = rowLines.map(r => r.split(',')); // Get first 20 rows for sample data
    modelDefinition.name = name;

    const attributes = [];
    const entries = [];

    for (let i = 0; i < headings.length; i++) {
      const headingName = headings[i].toLowerCase();

      const types = determineType(new Set(rows.slice(0, 20).map(row => findType(row[i]))));
      attributes.push(Object.assign({ name: headingName }, types));
    }

    rows.forEach((row) => {
      const entry = {};
      attributes.forEach((attribute, i) => {
        entry[attribute.name] = row[i];
      });
      entries.push(entry);
    });

    modelDefinition.entries = entries;
    modelDefinition.attributes = attributes;
    allModelDefinitions.push(modelDefinition);
  }
  return Promise.resolve(allModelDefinitions);
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

    if (value.multiple == true) {
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
export function findType(raw) {
  // If there is no value assume null
  if ((raw === null) || (raw === undefined)) return null;

  const string = raw.trim();
  if (string.length === 0) return null;

  const object = safeJSONParse(string);
  const multiple = Array.isArray(object);
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
    if (/^-?((\d+\.\d*)|(\d+\.\d*))$/.test(string)) {
      type = 'float';
    } else if (/^-?(\d+)$/.test(string)) {
      type = 'integer';
    } else {
      type = 'string';
    }
  }

  console.log(string, type);
  return {
    type,
    multiple,
    example: string,
  };
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
