// import * as constants from '../../constants_index';
// export class RegisterDeviceId {
//     // Register Device Id
//     getDeviceId() {
//         cy.request({
//             method: 'GET',
//             url: constants.URL.ACCOUNT.countryURL + country,
//             headers: {
//                 'deviceId': 'integration_device_id'
//             }
//         })
//             .then((response) => {
//             // assert correct HTTP Status Codes returned (200 - OK)
//                 expect(response.status).to.eq(200);
//             });
//         }

//     postUserDetails() {
//         cy.request({
//             method: 'POST',
//             url: constants.URL.ACCOUNT.signupURL,
//             headers: {
//                 'deviceId': 'integration_device_id'
//             },
//             body: {
//                 "password": "Password123",
//                 "username": Cypress.env('userEmail'),
//                 "country": country,
//                 "tcVersion": version
//             }
//         })
//             .then((response) => {
//             // assert correct HTTP Status Codes returned (200 - OK)
//             expect(response.status).to.eq(200);
//             const body = (response.body)
//             let email = body['destination']
//         });
//     }
// };
