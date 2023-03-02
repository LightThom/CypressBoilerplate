export class GoogleSearchLocators {
    get googleSearchInputField() {
        return cy.get('input[name="q"]');
    }

    get googleSearchButton() {
        return cy.get('input[name="btnK"]');
    }

    get searchResults() {
        return cy.get('#result-stats');
    }

    get acceptAllCookies() {
        return cy.get('#L2AGLb > .QS5gu');
    }
}
