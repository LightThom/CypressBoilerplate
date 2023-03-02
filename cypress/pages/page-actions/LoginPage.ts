import { LoginLocators } from '../../utils/page_index';

export class LoginPage extends LoginLocators {
    navigate() {
        cy.visit('/Login');
    }
}
