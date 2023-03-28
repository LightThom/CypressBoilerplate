import { CommonLocators } from "../common/CommonLocators";

export class CurrencyConverterLocators extends CommonLocators {
    protected get fromDropdownButton() {
        return cy.get("#midmarketFromCurrency");
    }

    protected get toDropdownButton() {
        return cy.get("#midmarketToCurrency");
    }

    protected get fromDropdownOptions() {
        return cy.get("#midmarketFromCurrency-listbox li");
    }

    protected get toDropdownOptions() {
        return cy.get("#midmarketToCurrency-listbox li");
    }
}
