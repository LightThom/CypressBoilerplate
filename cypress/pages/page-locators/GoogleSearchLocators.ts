import { CommonLocators } from "./CommonLocators";

//This is page elements file.
export class GoogleSearchLocators extends CommonLocators {
    elements = {
        googleSearchInputField: () => cy.get('input[name="q"]'),

        googleSearchButton: () => cy.get('div.FPdoLc input[name="btnK"]'),

        searchResults: () => cy.get('#result-stats'),

        acceptAllCookies: () => cy.get('#L2AGLb > .QS5gu')
    }
};
