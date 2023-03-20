import { CommonLocators } from '../commons/CommonLocators';

//This is page elements file.
export class GoogleSearchLocators extends CommonLocators {
    protected get googleSearchInputField() {
        return cy.get('input[name="q"]');
    }

    protected get googleSearchButton() {
        return cy.get('div.FPdoLc input[name="btnK"]');
    }

    get searchResults() {
        return cy.get('#result-stats');
    }

    protected get acceptAllCookies() {
        return cy.get('#L2AGLb > .QS5gu');
    }
}
