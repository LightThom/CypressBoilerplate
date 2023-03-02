//This is spec file, inside your google-search.spec.ts
import { GoogleSearchLocators } from "../pages/page-locators/GoogleSearchLocators";
import { GoogleSearchPage } from "../pages/page-actions/GoogleSearchPage";

describe('Google Navigation', () => { 
    const search = new GoogleSearchPage();
    const assert = new GoogleSearchLocators();

    beforeEach(() => {
        search.navigate();
        search.clickAcceptAllCookies();
    });

    // afterEach(() => {
    //     cy.screenshot();
    // });

    it('Google Search', () => {
        search.googleSearch('something');
        search.clickGoogleSearchButton();
        assert.elements.searchResults().should('exist');
    });
});
