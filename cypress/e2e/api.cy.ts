//This is spec file
import { Student } from "../api/student";
import { User } from "../api/user";

describe("API tests", () => {
    it("creates a student", () => {
        new Student().createStudent().then((response: Cypress.Response<any>) => {
            expect(response.status).to.eq(200);
        });
    });

    it("gets user 2", () => {
        new User().getuser(2).then((response: Cypress.Response<any>) => {
            expect(response.body.data.first_name).to.equal("Janet");
        });
    });

    it("should get 201 when creating a new user", () => {
        new User().createUser().then((response: Cypress.Response<any>) => {
            expect(response.status).to.equal(201);
        });
    });
});
