import { CurrencyConverterPage } from '../pages/page-actions/CurrencyConverterPage';
import { Generate } from '../utils/generic/generate';

describe('Currency converter tests', () => {
    beforeEach(() => {
        const currencyConverterPage = new CurrencyConverterPage();
        currencyConverterPage.navigateTo();
        currencyConverterPage.clickFromDropdownButton();

        // Aliasing the currencyConverterPage object
        cy.wrap(currencyConverterPage).as('currencyConverterPage');
    });

    it("should contain 'INR - Indian Rupee' in 'From' currency dropdown", () => {
        // Retrieving the currencyConverterPage object
        cy.get<CurrencyConverterPage>('@currencyConverterPage').then((currencyConverterPage: CurrencyConverterPage) => {
            currencyConverterPage.getFromCurrencies().should('contain', 'INR Indian Rupee');
        });
    });

    it('should check random from currency is present in to currencies dropdown', () => {
        /**
         * Just to show a helper method in use in Generate.ts class
         */
        cy.get<CurrencyConverterPage>('@currencyConverterPage').then((currencyConverterPage: CurrencyConverterPage) => {
            currencyConverterPage.getFromCurrencies().then((fromCurrencies: string[]) => {
                currencyConverterPage.clickToDropdownButton();
                currencyConverterPage.getToCurrencies().should('contain', Generate.randomOption<string>(fromCurrencies));
            });
        });
    });
});
