//This is page action file.
import { LoginLocators } from '../page-locators/LoginLocators'

export class LoginPage {
    navigate() {
        cy.visit('/Login');
    }
}
