const path = require('path');
const fs = require('fs');
const allure = require('@wdio/allure-reporter').default;

const appPath = path.join(
  process.cwd(),
  'android',
  'app',
  'build',
  'outputs',
  'apk',
  'debug',
  'app-debug.apk'
);

console.log('APK path:', appPath);
console.log('APK exists:', fs.existsSync(appPath));

exports.config = {
  runner: 'local',
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  specs: ['./test/specs/**/*.js'],
  exclude: [],

  maxInstances: 1,
  maxInstancesPerCapability: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    'appium:app': appPath,
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    'appium:noReset': false,
    'appium:fullReset': false,
    'appium:noSign': true,
    'appium:appWaitDuration': 180000,
    'appium:androidInstallTimeout': 180000,
    'appium:uiautomator2ServerInstallTimeout': 180000,
    'appium:uiautomator2ServerLaunchTimeout': 180000,
    'appium:adbExecTimeout': 180000
  }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 1,

  services: [],
  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },

  onPrepare: function () {
    const resultsDir = path.join(process.cwd(), 'allure-results');

    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(resultsDir, 'environment.properties'),
      [
        'Platform=Android',
        'Device=Android Emulator',
        'AutomationName=UiAutomator2',
        'App=native-demo-app',
        'TestEnvironment=CI',
        `NodeVersion=${process.version}`,
        'Framework=WebdriverIO'
      ].join('\n')
    );
  },

  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      const screenshot = await browser.takeScreenshot();

      allure.addAttachment(
        `Screenshot on failure - ${test.title}`,
        Buffer.from(screenshot, 'base64'),
        'image/png'
      );

      if (error) {
        allure.addAttachment(
          `Error message - ${test.title}`,
          `${error.message || error}\n\n${error.stack || ''}`,
          'text/plain'
        );
      }
    }
  }
};