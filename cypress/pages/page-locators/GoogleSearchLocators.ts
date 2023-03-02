import { CommonLocators } from "./CommonLocators";

//This is page elements file.
export class GoogleSearchLocators extends CommonLocators {
    get googleSearchInputField() {
        return cy.get('input[name="q"]');
    }

    get googleSearchButton() {
        return cy.get('div.FPdoLc input[name="btnK"]');
    }

    get searchResults() {
        return cy.get('#result-stats');
    }

    get acceptAllCookies() {
        return cy.get('#L2AGLb > .QS5gu');
    }
}