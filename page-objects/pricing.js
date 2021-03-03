const { By } = require("selenium-webdriver");

module.exports = {
  url: shared.testData.baseUrl + "/pricing",

  elements: {
    header: By.xpath('//p[@class="h-3" and contains(text(),"Pricing")]'),
  },

  openPage: async function () {
    await helpers.loadPage(page.home.url);
  },

  headerTextIsAsExpected: async function (excectedText) {
    await driver.wait(
      until.elementLocated(page.pricing.elements.header),
      shared.testData.timeOut
    );
    const header = await driver
      .findElement(page.pricing.elements.header)
      .getText();
    await expect(header).to.contain(excectedText);
  },
};
