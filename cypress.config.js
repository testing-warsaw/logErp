const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
       // baseUrl: 'https://waproanyqa.assecobs.pl/',
       baseUrl: 'https://qa-auth.assecobs.com/login?service=https://waproanyqa.assecobs.pl',
       viewportHeight: 640,
       viewportWidth: 1024,
  },
});
