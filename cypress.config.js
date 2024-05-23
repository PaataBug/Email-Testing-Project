const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js',
    env: {
      baseUrl: 'https://mailfence.com/',
      username: 'paaata123',
      password: 'Cypresstesting1',
      emailRecipient: 'paaata123@mailfence.com'
    },
    viewportWidth: 1366,
    viewportHeight: 768
  },
});
