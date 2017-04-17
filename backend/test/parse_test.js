import { expect } from 'chai';
import { describe, it } from 'mocha';
import { parseSpreadsheet, findType, determineType } from '../src/components/parse';

describe('Parse Service', () => {
  it('should exist', () => {
    expect(parseSpreadsheet).to.exist;
  });


  describe('findType', () => {
    it('should return null if no value is supplied', () => {
      const result = findType();
      expect(result).to.equal(null);
    });

    it('should return float if string contains one dot', () => {
      const result = findType('5.3');
      expect(result.type).to.equal('float');
    });

    it('should return string if string contains more than one dot', () => {
      const result = findType('5.3.3');
      expect(result.type).to.equal('string');
    });

    it('should return integer if string is only digits', () => {
      const result = findType('432');
      expect(result.type).to.equal('integer');
    });

    it('should return string otherwise', () => {
      const result = findType('This is a sentence.');
      expect(result.type).to.equal('string');
    });
  });

  describe('determineType', () => {
    it('should return string if one of the types is string', () => {
      const result = determineType([
        {
          type: 'string',
          multiple: 'false',
        },
        {
          type: 'float',
          multiple: 'false',
        },
        {
          type: 'integer',
          multiple: 'false',
        },
      ]);

      expect(result.type).to.equal('string');
      expect(result.required).to.equal(true);
    });

    it('should return float if one of the types is float and there is no string', () => {
      const result = determineType([
        {
          type: 'float',
          multiple: 'false',
        },
        {
          type: 'integer',
          multiple: 'false',
        },
      ]);

      expect(result.type).to.equal('float');
      expect(result.required).to.equal(true);
    });

    it('should return integer if one of the types is integer and there is no string', () => {
      const result = determineType([
        {
          type: 'integer',
          multiple: 'false',
        },
        {
          type: 'integer',
          multiple: 'false',
        },
      ]);

      expect(result.type).to.equal('integer');
      expect(result.required).to.equal(true);
    });

    it('should not be required if one of the types is not required', () => {
      const result = determineType([
        {
          type: 'string',
          multiple: 'false',
        },
        null,
      ]);

      expect(result.type).to.equal('string');
      expect(result.required).to.equal(false);
    });
  });
});
