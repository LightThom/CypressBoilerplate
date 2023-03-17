import urls from '../../fixtures/urls.json';

export class FetchVerificationCodeAndVerifyAccount {
    //
    // ------------------------ Get Message Id Request------------------------------------
    //
    getMessageId() {
        cy.request({
            method: 'GET', 
            url: urls.MAILINATOR.inboxURL + Cypress.env("emailPrefix"), 
            headers: {
            'Authorization': '138409cbcfdc4a84b4046f026df37fdf'
        }
    })
        .then((response) => {
            // assert correct HTTP Status Codes returned (200 - OK)
            expect(response.status).to.eq(200);
            const respBody = response.body;
            const responseBodyData = JSON.parse(respBody.body());
            cy.wait(2000);
            return responseBodyData;
        });
    }
    //
    // ------------------------ Email verification code Request ------------------------------------
    //
    emailVerificationCode(responseBodyData: string) {
        this.getMessageId()
        cy.request({
            method: 'GET',
            url: urls.MAILINATOR.inboxURL + Cypress.env("emailPrefix") + "/messages/" + responseBodyData
        })
            .then((response) => {
                // assert correct HTTP Status Codes returned (200 - OK)
                expect(response).property('status').to.eq(200);
                let code = response.body.parts[0].body.match(/>(\d\d\d\d\d\d)</)[1]
                Cypress.env("verificationCode", code);
        });
    }
    //
    // ------------------------ Verify code Request ------------------------------------
    //
    verifyCodeLogin() {
        cy.request({
            method: 'POST',
            url: urls.ACCOUNT.confirmSignUpURL,
            body: {
                'password': 'Password123',
                'username': Cypress.env('userEmail'),
                'code': Cypress.env("verificationCode"),
                'deviceId': 'integration_device_id',
                'deviceToken': 'integration_device_token',
                'devicePlatform': 'Android'
            }
        })
            .then((response) => {
                expect(response).property('status').to.equal(200);
                let token = response.body.authToken.jwtToken;
                Cypress.env("token", token);
        });
    }
}
    