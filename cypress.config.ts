import { defineConfig } from 'cypress';

export default defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/reports/mocha',
        quite: true,
        overwrite: false,
        html: false,
        json: true,
    },
    e2e: {
        baseUrl: 'https://www.google.co.uk',
        watchForFileChanges: false,

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
