'use strict';

var webdriver = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Chrome as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
// username: Username can be found at automation dashboard
const USERNAME = 'jamestrufintech';

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = 'E3wZyrzVOrYNbJGkhos72U5hhsRFDbupkOteOBvNY69GB1yXRY';

// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = 'hub.lambdatest.com/wd/hub';

module.exports = function() {

    // Setup Input capabilities
    const capabilities = {
        platform: 'Win10',
        browserName: 'ie',
        version: 'latest',
        resolution: '1920x1080',
        network: false,
        visual: true,
        console: true,
        video: true,
        IntroduceInstabilityByIgnoringProtectedModeSettings : true,

        disablePopupBlocking: true,

        allowBlockedContent: true,
        acceptSslCerts: true,
        ignoreProtectedModeSettings: true,

        name: 'Liudas Test', // name of the test
        build: 'NodeJS build' // name of the build
    }

    // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

    // setup and build selenium driver object
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

    driver.manage().window().maximize();

    return driver;
};
