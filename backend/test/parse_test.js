import { expect } from 'chai';
import { describe, it } from 'mocha';
import { parseSpreadsheet, findType, determineType } from '../src/services/parse';

describe('Parse Service', () => {
  it('should exist', () => {
    expect(parseSpreadsheet).to.exist;
  });

  describe('parseSpreadsheet', () => {
    const input = `policyID,statecode,county,eq_site_limit,hu_site_limit,fl_site_limit,fr_site_limit,tiv_2011,tiv_2012,eq_site_deductible,hu_site_deductible,fl_site_deductible,fr_site_deductible,point_latitude,point_longitude,line,construction,point_granularity
119736,FL,CLAY COUNTY,498960,498960,498960,498960,498960,792148.9,0,9979.2,0,0,30.102261,-81.711777,Residential,Masonry,1
448094,FL,CLAY COUNTY,1322376.3,1322376.3,1322376.3,1322376.3,1322376.3,1438163.57,0,0,0,0,30.063936,-81.707664,Residential,Masonry,3
206893,FL,CLAY COUNTY,190724.4,190724.4,190724.4,190724.4,190724.4,192476.78,0,0,0,0,30.089579,-81.700455,Residential,Wood,1
333743,FL,CLAY COUNTY,0,79520.76,0,0,79520.76,86854.48,0,0,0,0,30.063236,-81.707703,Residential,Wood,3
172534,FL,CLAY COUNTY,0,254281.5,0,254281.5,254281.5,246144.49,0,0,0,0,30.060614,-81.702675,Residential,Wood,1
785275,FL,CLAY COUNTY,0,515035.62,0,0,515035.62,884419.17,0,0,0,0,30.063236,-81.707703,Residential,Masonry,3
995932,FL,CLAY COUNTY,0,19260000,0,0,19260000,20610000,0,0,0,0,30.102226,-81.713882,Commercial,Reinforced Concrete,1
223488,FL,CLAY COUNTY,328500,328500,328500,328500,328500,348374.25,0,16425,0,0,30.102217,-81.707146,Residential,Wood,1
433512,FL,CLAY COUNTY,315000,315000,315000,315000,315000,265821.57,0,15750,0,0,30.118774,-81.704613,Residential,Wood,1
142071,FL,CLAY COUNTY,705600,705600,705600,705600,705600,1010842.56,14112,35280,0,0,30.100628,-81.703751,Residential,Masonry,1
253816,FL,CLAY COUNTY,831498.3,831498.3,831498.3,831498.3,831498.3,1117791.48,0,0,0,0,30.10216,-81.719444,Residential,Masonry,1
894922,FL,CLAY COUNTY,0,24059.09,0,0,24059.09,33952.19,0,0,0,0,30.095957,-81.695099,Residential,Wood,1
422834,FL,CLAY COUNTY,0,48115.94,0,0,48115.94,66755.39,0,0,0,0,30.100073,-81.739822,Residential,Wood,1
582721,FL,CLAY COUNTY,0,28869.12,0,0,28869.12,42826.99,0,0,0,0,30.09248,-81.725167,Residential,Wood,1
842700,FL,CLAY COUNTY,0,56135.64,0,0,56135.64,50656.8,0,0,0,0,30.101356,-81.726248,Residential,Wood,1
874333,FL,CLAY COUNTY,0,48115.94,0,0,48115.94,67905.07,0,0,0,0,30.113743,-81.727463,Residential,Wood,1
580146,FL,CLAY COUNTY,0,48115.94,0,0,48115.94,66938.9,0,0,0,0,30.121655,-81.732391,Residential,Wood,3
456149,FL,CLAY COUNTY,0,80192.49,0,0,80192.49,86421.04,0,0,0,0,30.109537,-81.741661,Residential,Wood,1
767862,FL,CLAY COUNTY,0,48115.94,0,0,48115.94,73798.5,0,0,0,0,30.11824,-81.745335,Residential,Wood,3
353022,FL,CLAY COUNTY,0,60946.79,0,0,60946.79,62467.29,0,0,0,0,30.065799,-81.717416,Residential,Wood,1
367814,FL,CLAY COUNTY,0,28869.12,0,0,28869.12,42727.74,0,0,0,0,30.082993,-81.710581,Residential,Wood,1
671392,FL,CLAY COUNTY,0,13410000,0,0,13410000,11700000,0,0,0,0,30.091921,-81.711929,Commercial,Reinforced Concrete,3
772887,FL,CLAY COUNTY,0,1669113.93,0,0,1669113.93,2099127.76,0,0,0,0,30.117352,-81.711884,Residential,Masonry,1
983122,FL,CLAY COUNTY,0,179562.23,0,0,179562.23,211372.57,0,0,0,0,30.095783,-81.713181,Residential,Wood,3
934215,FL,CLAY COUNTY,0,177744.16,0,0,177744.16,157171.16,0,0,0,0,30.110518,-81.727478,Residential,Wood,1
385951,FL,CLAY COUNTY,0,17757.58,0,0,17757.58,16948.72,0,0,0,0,30.10288,-81.705719,Residential,Wood,1
716332,FL,CLAY COUNTY,0,130129.87,0,0,130129.87,101758.43,0,0,0,0,30.068468,-81.71624,Residential,Wood,1
751262,FL,CLAY COUNTY,0,42854.77,0,0,42854.77,63592.88,0,0,0,0,30.068468,-81.71624,Residential,Wood,1
633663,FL,CLAY COUNTY,0,785.58,0,0,785.58,662.18,0,0,0,0,30.068468,-81.71624,Residential,Wood,1
105851,FL,CLAY COUNTY,0,170361.91,0,0,170361.91,177176.38,0,0,0,0,30.068468,-81.71624,Residential,Wood,1
`
    it('should find the correct model definition', () => {
      // const result = parseSpreadsheet([input]);
      // expect(result).to.equal([
      //   {
      //     "name": "",
      //     "raw": "",
      //     "properties": [
      //       {
      //         "type": "integer",
      //         "name": "policyID",
      //         "raw": "policyID",
      //         "lemma": "policyID",
      //         "required": true,
      //         "multiple": false
      //       },
      //       {
      //         "type": "string",
      //         "name": "breed",
      //         "raw": "breed",
      //         "lemma": "breed",
      //         "required": false,
      //         "multiple": false
      //       },
      //       {
      //         "type": "Owner",
      //         "name": "owner",
      //         "raw": "owner",
      //         "lemma": "owner",
      //         "required": false,
      //         "multiple": false
      //       },
      //       {
      //         "type": "Toy",
      //         "name": "likes_toy",
      //         "raw": "toy",
      //         "lemma": "toy",
      //         "required": false,
      //         "multiple": false
      //       }
      //     ]
      //   },
      //   {
      //     "name": "owner",
      //     "raw": "Owner",
      //     "properties": [
      //       {
      //         "type": "string",
      //         "name": "name",
      //         "raw": "name",
      //         "lemma": "name",
      //         "required": false,
      //         "multiple": false
      //       },
      //       {
      //         "type": "Pet",
      //         "name": "owns_pet",
      //         "raw": "pet",
      //         "lemma": "pet",
      //         "required": false,
      //         "multiple": false
      //       }
      //     ]
      //   },
      //   {
      //     "name": "toy",
      //     "raw": "Toy",
      //     "properties": [
      //       {
      //         "type": "string",
      //         "name": "name",
      //         "raw": "name",
      //         "lemma": "name",
      //         "required": false,
      //         "multiple": false
      //       }
      //     ]
      //   }
      // ]);
    })
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

    it('should detect arrays and find the type of elements', () => {
      const result = findType('[5.5,3.2,2.3]');

      expect(result.multiple).to.equal(true);
      expect(result.type).to.equal('float');
    });

    it('should detect arrays but throw if they are multidimensional', () => {
      const result = findType('[[5.5],[3.2],[2.3]]');

      // expect(findType).to.throw(Error); TODO Check for throwing error
    });


  });

  describe('determineType', () => {
    return;
    it('should return string if one of the types is string', () => {
      const result = determineType([
        {
          type: 'string',
          multiple: 'false'
        },
        {
          type: 'float',
          multiple: 'false'
        },
        {
          type: 'integer',
          multiple: 'false'
        },
      ]);

      expect(result.type).to.equal('string');
      expect(result.required).to.equal(true);
    });

    it('should return float if one of the types is float and there is no string', () => {
      const result = determineType([
        {
          type: 'float',
          multiple: 'false'
        },
        {
          type: 'integer',
          multiple: 'false'
        },
      ]);

      expect(result.type).to.equal('float');
      expect(result.required).to.equal(true);
    });

    it('should return integer if one of the types is float and there is no string', () => {
      const result = determineType([
        {
          type: 'integer',
          multiple: 'false'
        },
        {
          type: 'integer',
          multiple: 'false'
        },
      ]);

      expect(result.type).to.equal('float');
      expect(result.required).to.equal(true);
    });

    it('should not be required if one of the types is not required', () => {
      const result = determineType([
        {
          type: 'string',
          multiple: 'false'
        },
        null,
      ]);

      expect(result.type).to.equal('string');
      expect(result.required).to.equal(false);
    });
  });
});
