export class User {

    // Will be configured in the config file but another value is configured at the moment
    private readonly Base_Url = "https://reqres.in/api/";

    getuser(id: number) {
        return cy.getRequest(this.Base_Url + `users/${id}`);
    }

    createUser(user?: {}) {
        return cy.postRequest(this.Base_Url + 'users', typeof user === "undefined" ? {
            "name": "josh",
            "job": "leader"
        } : user);
    }
}