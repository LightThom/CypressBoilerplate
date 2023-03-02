import { GoogleSearchLocators } from '../../utils/page_index';

export class GoogleSearchPage extends GoogleSearchLocators {
    navigate() {
        cy.visit('https://www.google.com');
    }

    googleSearch(text: string) {
        this.googleSearchInputField().type(text);
    }

    clickGoogleSearchButton() {
        const searchButton = this.googleSearchButton();
        searchButton.click().then(() => {
            cy.focused().click();
        });
    }

    clickAcceptAllCookies() {
        this.acceptAllCookies().click();
    }
}
