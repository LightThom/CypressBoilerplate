
//This is spec file, inside your google-search.spec.ts
import { GoogleSearchPageTest } from '../utils/page_index';

const search = new GoogleSearchPageTest;

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