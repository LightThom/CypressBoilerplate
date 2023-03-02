// import * as constants from '../../constants_index';
// export class FetchVerificationCodeAndVerifyAccount {
//     // Get MsgId
//     getMessageId() {
//         cy.request({
//             method: 'GET', 
//             url: constants.URL.MAILINATOR.inboxURL + Cypress.env("emailPrefix"), 
//             headers: {
//             'Authorization': '138409cbcfdc4a84b4046f026df37fdf'
//         }
//     })
//         .then((response) => {
//             // assert correct HTTP Status Codes returned (200 - OK)
//             expect(response.status).to.eq(200);
//             const respBody = response.body;
//             cy.wait(2000);
//             return respBody;
//         });
//     }

//     // Fetch the email verification code from mailinator
//     emailVerificationCode() {
//         this.getMessageId()
//         cy.request({
//             method: 'GET',
//             url: constants.URL.MAILINATOR.inboxURL + Cypress.env("emailPrefix") + "/messages/" + respBody.msgs[0].id
//         })
//             .then((response) => {
//                 // assert correct HTTP Status Codes returned (200 - OK)
//                 expect(response).property('status').to.eq(200);
//                 let code = response.body.parts[0].body.match(/>(\d\d\d\d\d\d)</)[1]
//                 Cypress.env("verificationCode", code);
//         });
//     }

//     // Verify code and login
//     verifyCodeLogin() {
//         cy.request({
//             method: 'POST',
//             url: constants.URL.ACCOUNT.confirmSignUpURL,
//             body: {
//                 'password': 'Password123',
//                 'username': Cypress.env('userEmail'),
//                 'code': Cypress.env("verificationCode"),
//                 'deviceId': 'integration_device_id',
//                 'deviceToken': 'integration_device_token',
//                 'devicePlatform': 'Android'
//             }
//         })
//             .then((response) => {
//                 expect(response).property('status').to.equal(200);
//                 let token = response.body.authToken.jwtToken;
//                 Cypress.env("token", token);
//         });
//     }
// }
    