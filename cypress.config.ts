import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
