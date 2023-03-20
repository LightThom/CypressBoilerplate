//This is page action file.
import { GoogleSearchLocators } from '../page-locators/GoogleSearchLocators';

export class GoogleSearchPage extends GoogleSearchLocators {
    navigate() {
        cy.visit('https://www.google.com');
    }

    googleSearch(text: string) {
        this.googleSearchInputField.type(text);
    }

    clickGoogleSearchButton() {
        this.googleSearchButton.click();
    }

    clickAcceptAllCookies() {
        this.acceptAllCookies.click();
    }

    getSearchResults() {
        return this.searchResults;
    }
}
