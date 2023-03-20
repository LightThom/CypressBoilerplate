export class User {
    // Will be configured in the config file but another value is configured at the moment
    private readonly Base_Url = 'https://reqres.in/api/';

    getuser(id: number) {
        /**
         * Initiates a get request to the users endpoint for a user with id argument provided
         */
        return cy.getRequest(this.Base_Url + `users/${id}`);
    }

    createUser(user?: {}) {
        /**
         * Posts to the 'users' endpoint of the base url. If argument 'user' is not provided, the default payload is used
         */
        return cy.postRequest(
            this.Base_Url + 'users',
            typeof user === 'undefined'
                ? {
                      name: 'mark',
                      job: 'leader',
                  }
                : user
        );
    }
}
