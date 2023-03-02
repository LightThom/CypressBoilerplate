//This is spec file, inside your google-search.spec.ts
import * as pages from '../utils/page_index';

describe('Google Navigation', () => {
    const search = new pages.GoogleSearchPage();
    const assert = new pages.GoogleSearchLocators();

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
        assert.elements.searchResults().should('exist');
    });
});
