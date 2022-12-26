const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'qz7uss',
  video: false,
  env: {
    wpUser: 'root',
    wpPassword: 'root',
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      /*const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });*/

      allureWriter(on, config);

      /*on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });*/

      return config;



    },
    //specPattern:"cypress/integration/*.ts",
    specPattern: "cypress/e2e/features/*.feature",
    experimentalWebKitSupport: true,
  },
});
