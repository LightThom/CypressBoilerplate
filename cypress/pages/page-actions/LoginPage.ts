import { LoginLocators } from '../../utils/page_index';

export class LoginPage {
    navigate() {
        cy.visit('/Login');
    }
}
