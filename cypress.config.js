const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for thml reports
    e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure=true;
      on('file:preprocessor', cucumber()); 
    },

    specPattern: 'cypress/e2e/*.feature',
    video: true,
    
  },

})