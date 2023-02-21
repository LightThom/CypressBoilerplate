export class CommonObjects {
    
    // Page Elements
    elements = {
    example: () => cy.get('#example')
    }
    
    // Page Actions
    navigate() {
        cy.visit('/example/');
    }
}