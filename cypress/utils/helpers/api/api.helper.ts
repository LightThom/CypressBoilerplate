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
};

async createAndApproveCognitoAccount(country) {
  let profileDetails;
  cy.log("Creating new account")
      .then(() => {
          this.createCongitoAccount(country);
      })
      .then(() => {
          cy.log("Verifying new account")
          this.fetchVerificationCodeAndVerifyAccount(country);
      })
      .then(() => {
          cy.log("Get profile data")
          profileDetails = this.getProfileDetails(country);
      })
      .then(() => {
          cy.log("Getting Profile Info")
          this.getProfileId(profileDetails);
      })
      .then(() => {
          cy.log("Get profile Hash")
          this.getProfileHash(profileDetails);
      })
      .then((returnValue) => {
          cy.log("Inserting Profile")
          this.insertProfile(returnValue, profileDetails);
      })
      .then(() => {
          cy.log("Get new token")
          this.getToken();
      })
  cy.log("New Account Setup Complete");
}

async createCongitoAccount(country) {
  Cypress.env("emailPrefix", "accept.no2fa" + country + Date.now())
  Cypress.env("userEmail", Cypress.env("emailPrefix") + "@xedigital.m8r.co");
  Cypress.env('envObj', {});
  Cypress.env('retries', 3);
  Cypress.env('flag', false);

  let version;
  switch (country) {
      case 'CA':
          version = "XEMT_CA_PERSONAL";
          break;
      case 'US':
          version = "XEMT_US_CONSUMER";
          break;
      case 'GB':
          version = "XEMT_UK_PERSONAL";
          break;
      case 'AU':
          version = "XEMT_AU_PERSONAL";
          break;
      case 'NZ':
          version = "XEMT_NZ_PERSONAL";
          break;
      case 'ES':
      case 'FR':
          version = "XEMT_EU_PERSONAL";
          break;
      default:
          console.error("TC Version not set for country " + country)
  }

  // Register Device Id
  cy.request({
      method: 'GET',
      url: "https://launchpad-api-integration.xe.com/Destinations/countries?countryFrom=" + country,
      headers: {
          deviceId: "integration_device_id"
      },
  }).then(response => {
      expect(response.status).to.equal(200);
  });

  cy.request({
      method: 'POST',
      url: "https://launchpad-api-integration.xe.com/authorization/signup",
      headers: {
          deviceId: "integration_device_id"
      },
      body: {
          "password": "Password123",
          "username": Cypress.env('userEmail'),
          "country": country,
          "tcVersion": version
      }
  })
      .then(response => {
          expect(response.status).to.equal(200);
          const body = (response.body)
          let email = body['destination']
      });
}

async fetchVerificationCodeAndVerifyAccount() {
  // Get MsgId
  cy.request({
      method: 'GET',
      url: "https://mailinator.com/api/v2/domains/xedigital.m8r.co/inboxes/" + Cypress.env("emailPrefix"),
      headers: {
          'Authorization': '138409cbcfdc4a84b4046f026df37fdf'
      }
  })
      .then((response) => {
          expect(response).property('status').to.equal(200);
          const respBody = response.body;
          cy.wait(2000);

          // Fetch the email verification code from mailinator
          cy.request({
              method: 'GET',
              url: "https://mailinator.com/api/v2/domains/xedigital.m8r.co/inboxes/" + Cypress.env("emailPrefix") + "/messages/" + respBody.msgs[0].id
          })
              .then((response) => {
                  expect(response).property('status').to.equal(200);
                  let code = response.body.parts[0].body.match(/>(\d\d\d\d\d\d)</)[1]
                  Cypress.env("verificationCode", code);

                  // Verify code and login
                  cy.request({
                      method: 'POST',
                      url: "https://launchpad-api-integration.xe.com/authorization/confirmSignup",
                      body: {
                          "password": "Password123",
                          "username": Cypress.env('userEmail'),
                          "code": Cypress.env("verificationCode"),
                          "deviceId": "integration_device_id",
                          "deviceToken": "integration_device_token",
                          "devicePlatform": "Android"
                      }
                  })
                      .then((response) => {
                          expect(response).property('status').to.equal(200);
                          let token = response.body.authToken.jwtToken;
                          Cypress.env("token", token);
                      });
              });
      });
}

getProfileDetails(country) {
  let details;
  switch (country) {
      case 'US':
          details = {
              "region": "US",
              "fullName": {
                  "firstName": faker.name.firstName(),
                  "lastName": faker.name.lastName()
              },
              "fixedFormatAddress": {
                  "unit": "1",
                  "streetNumber": "329",
                  "streetName": faker.address.street(),
                  "streetType": "Bayou",
                  "place": "New York",
                  "state": "NY",
                  "postalCode": "20195"
              },
              "country": "US",
              "mobileNumber": {
                  "mobilePrefix": "+1",
                  "mobilePhone": "5155555550"
              },
              "dateOfBirth": this.getRandomDOB("YYYY-MM-DD"),
              "countryOfBirth": "US",
              "occupation": "TEACHER_6",
              "nationality": "US",
              "preferredLanguage": "en"
          };
          break;
      case 'CA':
          details = {
              "region": "CA",
              "fullName": {
                  "firstName": faker.name.firstName(),
                  "lastName": faker.name.lastName(),
              },
              "fixedFormatAddress": {
                  "unit": "1",
                  "streetNumber": "96",
                  "streetName": "Surrey",
                  "streetType": "Street",
                  "place": "Streetsville",
                  "state": "ON",
                  "postalCode": "L5M 1X2"
              },
              "country": "CA",
              "mobileNumber": {
                  "mobilePrefix": "+1",
                  "mobilePhone": "5155555550"
              },
              "dateOfBirth": this.getRandomDOB("YYYY-MM-DD"),
              "countryOfBirth": "CA",
              "occupation": "TEACHER_6",
              "nationality": "CA",
              "preferredLanguage": "en"
          };
          break;
      case 'NZ':
          details = {
              "region": country,
              "fullName": {
                  "firstName": faker.name.firstName(),
                  "lastName": faker.name.lastName()
              },
              "freeFormatAddress": {
                  "addressLine1": "2 Riverglade Drive",
                  "addressLine2": "test road",
                  "addressLine3": "test avenue",
                  "place": "test city",
                  "county": "Hamilton",
                  "postalCode": "3284"
              },
              "country": "NZ",
              "mobileNumber": {
                  "mobilePrefix": "+64",
                  "mobilePhone": "280555550"
              },
              "dateOfBirth": this.getRandomDOB("YYYY-MM-DD"),
              "countryOfBirth": "NZ",
              "occupation": "FARMER_6",
              "idDocDetails": {
                  "idType": "Passport",
                  "passportNumber": "P12345",
                  "passportIssuer": "NZ",
                  "idExpiryDate": "2027-10-10"
              },
              "nationality": "NZ"
          };
          break;
      case 'AU':
          details = {
              "region": "AU",
              "fullName": {
                  "firstName": faker.name.firstName(),
                  "lastName": faker.name.lastName()
              },
              "freeFormatAddress": {
                  "addressLine1": "3 test street",
                  "addressLine2": "test road",
                  "addressLine3": "test avenue",
                  "place": "test city",
                  "county": "test county",
                  "postalCode": "RG12 1RT"
              },
              "country": "AU",
              "mobileNumber": {
                  "mobilePrefix": "+64",
                  "mobilePhone": "280555550"
              },
              "dateOfBirth": this.getRandomDOB("YYYY-MM-DD"),
              "countryOfBirth": "AU",
              "occupation": "FARMER_6",
              "idDocDetails": {
                  "idType": "Passport",
                  "passportNumber": "P12345",
                  "passportIssuer": "AU",
                  "idExpiryDate": "2022-09-10"
              },
              "nationality": "AU"
          }
          break;
      case 'GB':
          details = {
              "region": "UK",
              "fullName": {
                  "firstName": faker.name.firstName(),
                  "lastName": faker.name.lastName(),
              },
              "freeFormatAddress": {
                  "addressLine1": "Maxis 1",
                  "addressLine2": "Western Road",
                  "place": "Bracknell",
                  "county": "Berkshire",
                  "postalCode": "RG12 1RT"
              },
              "country": "GB",
              "mobileNumber": {
                  "mobilePrefix": "+44",
                  "mobilePhone": "7555555550"
              },
              "dateOfBirth": this.getRandomDOB("YYYY-MM-DD"),
              "countryOfBirth": "GB",
              "occupation": "TEACHER_6",
              "nationality": "GB",
              "preferredLanguage": "en"
          };
          break;
      case 'FR':
          details = {
              "region": "FR",
              "fullName": {
                  "firstName": faker.name.firstName()(),
                  "lastName": faker.name.lastName()
              },
              "freeFormatAddress": {
                  "addressLine1": "Elbestr. 67 51371 Leverkusen",
                  "addressLine2": "test road",
                  "addressLine3": "test avenue",
                  "place": "Leverkusen",
                  "county": "",
                  "postalCode": "72000"
              },
              "country": "FR",
              "mobileNumber": {
                  "mobilePrefix": "+44",
                  "mobilePhone": "280555550"
              },
              "dateOfBirth": this.getRandomDOB("YYYY-MM-DD"),
              "countryOfBirth": "FR",
              "occupation": "TEACHER_6",
              "nationality": "FR",
              "preferredLanguage": "en"
          };
          break;
      default:
          throw new Error("User details for country code '" + country + " has not been implemented")
  }
  return details;
}

// Randomize DOB
getRandomDOB(dateFormat) {
  function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  let date = randomDate(new Date(1950, 0, 1), new Date(2000, 0, 1));
  let dateAsString = date.toISOString()
  let dateOnly = dateAsString.split('T')[0]
  return dateOnly
}

async getProfileId(profileDetails) {
  //update Profile
  cy.request({
      method: 'GET',
      url: "https://integration-profile-api.xedigital-wildcard.net/profiles",
      headers: {
          'Authorization': "Bearer " + Cypress.env("token")
      }
  }).then(response => {
      expect(response.status).to.equal(200);
      Cypress.env("profileId", response.body.data[0].profileId);
  });
}

async getProfileHash(profileDetails) {
  // Hash profile
  console.log(profileDetails);
  cy.request({
      method: 'POST',
      url: "https://integration-profile-api.xedigital-wildcard.net/tests/hash",
      headers: {
          'content-type': 'application/json'
      },
      body: profileDetails

  }).then(response => {
      expect(response.status).to.equal(200);
      return response.body;
  });
}

async insertProfile(newProfileHash, profileDetails) {
  //Update Pofile
  cy.request({
      method: 'PUT',
      url: "https://integration-profile-api.xedigital-wildcard.net/profiles/" + Cypress.env("profileId"),
      headers: {
          'content-type': 'application/json',
          'Authorization': "Bearer " + Cypress.env("token")
      },
      body: {
          "hashData": newProfileHash,
          "requestData": profileDetails
      }

  }).then(response => {
      expect(response.status).to.equal(200);
  });

  //Calling profile service Patch request to update the platform type to Galielo after Profile creation
  cy.request({
      method: 'PATCH',
      url: "https://integration-profile-api.xedigital-wildcard.net/profiles/" + Cypress.env("profileId"),
      headers: {
          'content-type': 'application/json',
          'Authorization': "Bearer " + Cypress.env("token")
      },
      body: {
          "Platform": "Galileo",
      }
  });
}

async getToken() {
  cy.request({
      method: 'POST',
      url: "https://launchpad-api-integration.xe.com/authorization/signin",
      headers: {
          'content-type': 'application/json'
      },
      body: {
              "password": "Password123",
              "username": Cypress.env("userEmail"),
              "deviceId": "integration_device_id",
              "deviceToken": "integration_device_token",
              "devicePlatform": "Android"
      }
  })
  .then((response) => {
      expect(response).property('status').to.equal(200);
      let token = response.body.authToken.jwtToken;
      Cypress.env("token", token);
  });
}

};
