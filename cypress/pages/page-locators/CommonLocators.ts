//This is a Common Locators file
//used across all page locators to build dynamic locators and common locators are shared across multiple pages.
export class CommonLocators {
    commonElements = {
        example: () => cy.get('#example'),

        navigationBar: () => cy.get('div.navbar-header'),

        googleLogo: () => cy.get('div.navbar-header')
    }

    // Dynamic locator example
    button(buttonName: string, index: number) {
        return cy.get(`input[name=${buttonName}${index}]`);
    }
}
