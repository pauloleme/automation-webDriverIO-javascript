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

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Android Emulator',
      'appium:automationName': 'UiAutomator2',
      'appium:platformVersion': '13',
      'appium:app': appPath,
      'appium:appPackage': 'com.wdiodemoapp',
      'appium:appActivity': 'expo.modules.devlauncher.launcher.DevLauncherActivity',
      'appium:appWaitActivity': '*',
      'appium:appWaitForLaunch': true,
      'appium:newCommandTimeout': 240,
      'appium:uiautomator2ServerInstallTimeout': 120000,
      'appium:uiautomator2ServerLaunchTimeout': 120000,
      'appium:androidInstallTimeout': 120000,
      'appium:appWaitDuration': 120000,
      'appium:autoGrantPermissions': true,
      'appium:noReset': false,
      'appium:fullReset': false,
      'appium:skipDeviceInitialization': false,
      'appium:skipServerInstallation': false
    }
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 1,

  services: [],
  framework: 'mocha',

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
      }
    ]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },

  afterTest: async function (test, context, { passed }) {
    if (!passed) {
      const screenshot = await browser.takeScreenshot();
      allure.addAttachment(
        `Screenshot on failure - ${test.title}`,
        Buffer.from(screenshot, 'base64'),
        'image/png'
      );
    }
  }
};