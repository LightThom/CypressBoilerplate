import user from "../fixtures/user.json";
import urls from "../fixtures/urls.json";

export class DeviceRegistration {
    //
    // ------------------------ Register Device Id Request ------------------------------------
    //
    getDeviceId() {
        cy.request({
            method: "GET",
            url: urls.ACCOUNT.countryURL + user.int.country,
            headers: {
                deviceId: "integration_device_id"
            }
        }).then(response => {
            // assert correct HTTP Status Codes returned (200 - OK)
            expect(response.status).to.eq(200);
        });
    }
    //
    // ------------------------ Post User Details Request ------------------------------------
    //
    postUserDetails() {
        cy.request({
            method: "POST",
            url: urls.ACCOUNT.signupURL,
            headers: {
                deviceId: "integration_device_id"
            },
            body: {
                password: "Password123",
                username: Cypress.env("userEmail"),
                country: user.int.country,
                tcVersion: user.int.tcVersion
            }
        }).then(response => {
            // assert correct HTTP Status Codes returned (200 - OK)
            expect(response.status).to.eq(200);
        });
    }
}
