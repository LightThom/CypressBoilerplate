export class LoginPage {
    
    // Page Elements
    elements = {
    example: () => cy.get('#example')
    }
    
    // Page Actions
    navigate() {
        cy.visit('/Login');
    }
}