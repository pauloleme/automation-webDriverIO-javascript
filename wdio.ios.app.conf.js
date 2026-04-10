const path = require('path');
const fs = require('fs');
const allure = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    port: 4723,

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 15',
        'appium:platformVersion': '17.5',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'ios.wdio.native.app.app'),
        'appium:newCommandTimeout': 240,
        'appium:noReset': false
    }],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],
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
        timeout: 60000
    },

    onPrepare: function () {
        const resultsDir = path.join(process.cwd(), 'allure-results');
        if (!fs.existsSync(resultsDir)) {
            fs.mkdirSync(resultsDir, { recursive: true });
        }

        fs.writeFileSync(
            path.join(resultsDir, 'environment.properties'),
            [
                'Platform=iOS',
                'Device=iPhone 15',
                'AutomationName=XCUITest',
                'App=native-demo-app',
                'TestEnvironment=QA',
                `NodeVersion=${process.version}`,
                'Framework=WebdriverIO'
            ].join('\n')
        );
    },

    afterTest: async function (test, context, { error, passed }) {
        if (!passed) {
            const screenshot = await browser.takeScreenshot();

            allure.addAttachment(
                'Screenshot',
                Buffer.from(screenshot, 'base64'),
                'image/png'
            );

            if (error) {
                allure.addAttachment(
                    'Error message',
                    `${error.message || error}\n\n${error.stack || ''}`,
                    'text/plain'
                );
            }
        }
    }
};