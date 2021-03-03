const { By } = require("selenium-webdriver");

module.exports = {
  url: shared.testData.baseUrl + "/about",

  elements: {
    header: By.xpath('//p[@class="h-3" and contains(text(),"About")]'),
  },

  openPage: async function () {
    await helpers.loadPage(page.home.url);
  },

  headerTextIsAsExpected: async function (excectedText) {
    await driver.wait(
      until.elementLocated(page.about.elements.header),
      shared.testData.timeOut
    );
    const header = await driver
      .findElement(page.about.elements.header)
      .getText();
    await expect(header).to.contain(excectedText);
  },
};
