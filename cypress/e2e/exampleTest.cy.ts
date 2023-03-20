//This is spec file, inside your google-search.spec.ts
import { GoogleSearchPage } from '../pages/page-actions/GoogleSearchPage';

describe('Google Navigation', () => {
    it('Google Search', () => {
        const googleSearchPage = new GoogleSearchPage();
        googleSearchPage.navigate();
        googleSearchPage.clickAcceptAllCookies();
        googleSearchPage.googleSearch('something');
        googleSearchPage.clickGoogleSearchButton();
        googleSearchPage.getSearchResults().should('exist');
    });
});
