//This is a Common Locators file
//used across all page locators to build dynamic locators and common locators are shared across multiple pages.
export class CommonLocators {
    get example() {
        return cy.get('#example');
    }

    get navigationBar() {
        return cy.get('div.navbar-header');
    }

    get googleLogo() {
        return cy.get('div.navbar-header');
    }
}
