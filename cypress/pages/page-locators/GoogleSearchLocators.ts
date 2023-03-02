export class GoogleSearchLocators {
    elements = {
        googleSearchInputField: () => cy.get('input[name="q"]'),

        googleSearchButton: () => cy.get('input[name="btnK"]'),

        searchResults: () => cy.get('#result-stats'),

        acceptAllCookies: () => cy.get('#L2AGLb > .QS5gu')
    }
};
