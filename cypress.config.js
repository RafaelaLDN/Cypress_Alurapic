const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6ke1id',
  
  
  e2e: {

    baseUrl: 'https://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    
      reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/report/mochawesome-report",
        overwrite: true,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
        
  },
  },
   
});

