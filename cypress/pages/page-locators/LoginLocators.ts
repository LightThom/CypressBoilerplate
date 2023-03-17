import { CommonLocators } from "./CommonLocators";

//This is page elements file.
export class LoginLocators extends CommonLocators {

    protected get example() {
        return cy.get('input[name="q"]');
    }
}






