//This is spec file, inside your google-search.spec.ts
import { GoogleSearch } from '../utils/index';

const search = new GoogleSearch();

describe('Google Navigation', () => {
    beforeEach(() => {
        search.navigate();
        search.clickAcceptAllCookies();
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Google Search', () => {
        search.googleSearch('something{enter}');
        search.clickGoogleSearchButton();
        search.elements.searchResults().should('exist');
    });
});
