exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            'goog:chromeOptions': {
                prefs: {
                    'intl.accept_languages': 'en,EN'
                }
            }
        },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://dev.deel.wtf/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: 30000
    },
    reporters: [
        'spec',
        [
            'allure', 
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    services: ['chromedriver'],
    before() {
        browser.maximizeWindow();
    },
};
