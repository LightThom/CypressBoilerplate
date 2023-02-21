//Inside your google-search.page.ts file. This is pageobject file.
export class GoogleSearch{

    // Page Elements
    elements = {
        googleSearch: () => cy.get('input[name="q"]'),
        googleSearchButton: () => cy.get('input[name="btnK"]'),
        searchResults: () => cy.get('#result-stats'),
        acceptAllCookies: () => cy.get('#L2AGLb > .QS5gu')
        }
        
        // Page Actions
        navigate() {
            cy.visit('https://www.google.com');
        }
        
        googleSearch(text) {
            this.elements.googleSearch()
            .type(text)
        }

        clickGoogleSearchButton() {
            this.elements.googleSearchButton()
            cy.focused().click()
        }

        clickAcceptAllCookies() {
            this.elements.acceptAllCookies()
            .click()
        }
    }