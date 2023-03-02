//This is page action file.
import { GoogleSearchLocators } from '../page-locators/GoogleSearchLocators';

const search = new GoogleSearchLocators;

export class GoogleSearchPage {
    navigate() {
        cy.visit('https://www.google.com');
    }

    googleSearch(text: string) {
        search.elements.googleSearchInputField().type(text);
    }

    clickGoogleSearchButton() {
        search.elements.googleSearchButton().click();
    }

    clickAcceptAllCookies() {
        search.elements.acceptAllCookies().click();
    }
}
