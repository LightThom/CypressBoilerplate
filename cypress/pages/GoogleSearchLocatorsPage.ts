//This is pageobject file.
export class GoogleSearchLocatorsPage {
    // Page Elements
    elements = {
        googleSearch: () => cy.get('input[name="q"]'),
        googleSearchButton: () => cy.get('div.FPdoLc input[name="btnK"]'),
        searchResults: () => cy.get('#result-stats'),
        acceptAllCookies: () => cy.get('#L2AGLb > .QS5gu'),
    };

    // Page Actions
    navigate() {
        cy.visit('https://www.google.com');
    }

    googleSearch(text: string) {
        this.elements.googleSearch().type(text);
    }

    clickGoogleSearchButton() {
        this.elements.googleSearchButton().click();
    }

    clickAcceptAllCookies() {
        this.elements.acceptAllCookies().click();
    }
}