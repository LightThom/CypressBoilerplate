//This is spec file, inside your google-search.spec.ts
import { TestAPI } from '../utils/helper_index';

const api = new TestAPI();

describe('Google Navigation', () => {
    beforeEach(() => {
      })

    it('calls API', () => {
        api.apiTest();
    });
});
