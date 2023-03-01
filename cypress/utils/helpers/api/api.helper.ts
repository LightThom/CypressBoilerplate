import * as constants from '../../constants_index';
export class TestAPI {
    // Test API for this example
    apiTest() {
        cy.request('POST', constants.API.TEST.apiTestURL, {
            student: constants.USER.TEST.student,
            email_address: constants.USER.TEST.email_address,
            phone: constants.USER.TEST.phone,
            current_grade: constants.USER.TEST.current_grade,
            topping: ['bacon', 'cheese', 'mushroom'],
        }).then((response) => {
            // assert correct HTTP Status Codes returned (200 - OK)
            expect(response.status).to.eq(200);
        });
    }
}
