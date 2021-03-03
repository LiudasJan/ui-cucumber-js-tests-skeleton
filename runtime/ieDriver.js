'use strict';

var ieDriver = require('iedriver');
var selenium = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Chrome as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function() {

  var driver = new selenium.Builder().withCapabilities({
    browserName: 'ie',
    ignoreProtectedModeSettings: true,
    ignoreZoomSetting: true,
    javascriptEnabled: true,
    acceptSslCerts: true,
    requireWindowFocus: true,
    path: ieDriver.path,
  }).build();

  driver.manage().window().maximize();

  return driver;
};
