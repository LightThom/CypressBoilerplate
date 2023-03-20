export {};

declare global {
    namespace Cypress {
        interface Chainable {
            getRequest(endPoint: string): Chainable<Response<any>>;
            postRequest(endPoint: string, body: {}): Chainable<Response<any>>;
            toStringArray(): Chainable<string[]>;
        }
    }
}

Cypress.Commands.add('getRequest', (endPoint: string) => {
    /**
     * Cypress command for GET requests
     */

    return cy.request({
        method: 'GET',
        url: endPoint,
        headers: {
            Authorization: 'Bearer' + Cypress.env('token'),
        },
    });
});

Cypress.Commands.add('postRequest', (endPoint: string, body: {}) => {
    /**
     * Cypress command for POST requests
     */

    return cy.request({
        method: 'POST',
        url: endPoint,
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + Cypress.env('token'),
        },
        body: { ...body },
    });
});

Cypress.Commands.add(
    'toStringArray',
    { prevSubject: 'element' },
    (subject: JQuery<HTMLElement>) => {
        /**
         * Returns an array of strings/text of the elements yielded
         */

        var array: string[] = [];
        return cy
            .wrap(subject)
            .each(($element) => array.push($element.text()))
            .then(() => array);
    }
);
