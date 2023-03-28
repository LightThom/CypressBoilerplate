import { CurrencyConverterLocators } from "../page-locators/CurrencyConverterLocators";

export class CurrencyConverterPage extends CurrencyConverterLocators {
    navigateTo() {
        cy.visit("https://xe.com/currencyconverter");
    }

    clickFromDropdownButton() {
        this.fromDropdownButton.click();
    }

    clickToDropdownButton() {
        this.toDropdownButton.click();
    }

    getFromCurrencies() {
        return this.formatCurrencies(this.fromDropdownOptions);
    }

    getToCurrencies() {
        return this.formatCurrencies(this.toDropdownOptions);
    }

    private formatCurrencies(options: Cypress.Chainable<JQuery<HTMLElement>>) {
        /**
         * Removes the system unrecognisable hyphens
         */

        let regex = new RegExp(/[^a-zA-Z0-9]+/g);

        return options.toStringArray().then(els => els.map(e => e.replace(regex, " ")));
    }
}
