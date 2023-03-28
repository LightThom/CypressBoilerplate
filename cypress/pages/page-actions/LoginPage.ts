//This is page action file.
import { LoginLocators } from "../page-locators/LoginLocators";

export class LoginPage extends LoginLocators {
    navigate() {
        cy.visit("/Login");
    }
}
