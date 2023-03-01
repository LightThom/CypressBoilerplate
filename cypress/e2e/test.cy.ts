//This is spec file, inside your google-search.spec.ts
import { GoogleSearchPage } from '../utils/page_index';

const search = new GoogleSearchPage();

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
