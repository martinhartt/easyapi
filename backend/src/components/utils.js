

export function stringToHandle(string) {
  return string.toLowerCase().replace(/\W/g, '');
}

export function encode(value, type) {
  return `${value}`;
}

export function decode(string, type) {
  switch (type) {
    case 'integer':
      return parseInt(string, 10);
    case 'float':
      return parseFloat(string);
    default:
      return string;
  }
}
