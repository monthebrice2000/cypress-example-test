// const { defineConfig } = require("cypress");
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
//   const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


/*module.exports = defineConfig({
  projectId: 'qz7uss',
  video: false,
  env: {
    wpUser: 'root',
    wpPassword: 'root',
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      /!*require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });*!/

      allureWriter(on, config);

      /!*on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });*!/

      return config;



    },
    specPattern:"cypress/e2e/!**!/!*.cy.ts",
    //specPattern: "cypress/e2e/features/!*.feature",
    experimentalWebKitSupport: true,
  },
});
*/


import { defineConfig } from 'cypress';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export const defaultConfig = {
  video: false,
  fixturesFolder: 'src/test/javascript/cypress/fixtures',
  screenshotsFolder: 'target/cypress/screenshots',
  downloadsFolder: 'target/cypress/downloads',
  videosFolder: 'target/cypress/videos',
  chromeWebSecurity: true,
  viewportWidth: 1200,
  viewportHeight: 720,
  retries: 2,
  projectId: 'qz7uss',
  env: {
    authenticationUrl: '/api/authenticate',
    jwtStorageName: 'jhi-authenticationToken',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      return (await import('./cypress/plugins/index')).default(on, config);
      // return config;
    },
    //baseUrl: 'http://localhost:8080/',
    specPattern:"cypress/e2e/**/*.cy.ts",
    supportFile: 'cypress/support/index.ts',
    experimentalSessionAndOrigin: true,
  },
};

export default defineConfig(defaultConfig);
