const { setHeadlessWhen } = require('@codeceptjs/configure');
const testSetup = require('./test-setup');

setHeadlessWhen(process.env.HEADLESS);

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true, // Show browser during tests
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'translation-tool',
  bootstrap: testSetup.bootstrap,
  teardown: testSetup.teardown,
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  multiple: {
    parallel: {
      // Disable parallel execution
      chunks: 1
    }
  }
};