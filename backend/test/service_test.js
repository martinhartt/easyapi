import { describe, it } from 'mocha';
import { createService } from '../src/services/service';

describe('createService', () => {
  it('should correctly create a service', () => {
    createService(
      'Cats',
      [
        {
          name: 'guy',
          attributes: [
            {
              type: 'string',
              name: 'name',
            },
            {
              type: 'integer',
              name: 'age',
            },
          ],
          entries: [
            {
              name: 'Tom',
              age: 50,
            },
            {
              name: 'Jack',
              age: 20,
            },
          ],
        },
      ],
     1,
    );
  });
});
