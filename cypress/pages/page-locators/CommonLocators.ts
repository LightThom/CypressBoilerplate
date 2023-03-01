export class CommonObjects {
    get example() {
        return cy.get('#example');
    }

    get navigationBar() {
        return cy.get('div.navbar-header');
    }

    get googleLogo() {
        return this.navigationBar.find('span.icon.google-header-logo');
    }

    // dynamic locator example
    button(buttonName: string, index: number) {
        return cy.get(`input[name=${buttonName}${index}]`);
    }
}
