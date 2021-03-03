'use strict';

var selenium = require('selenium-webdriver');
var edgedriver = require('edgedriver');

/**
 * Creates a Selenium WebDriver using Chrome as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function() {
    // var service = new edge.ServiceBuilder(edgedriver.path).build();
    // var options = new edge.Options();
    // var driver = edge.Driver.createSession(options, service);
    var driver = new selenium.Builder().withCapabilities({
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true,
        acceptSslCerts: true,
        path: edgedriver.path
    }).build();
    driver.manage().window().maximize();

    return driver;
};
