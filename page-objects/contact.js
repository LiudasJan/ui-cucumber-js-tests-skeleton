const { By } = require("selenium-webdriver");

module.exports = {
  url: shared.testData.baseUrl + "/contact",

  elements: {
    header: By.xpath('//p[@class="h-3" and contains(text(),"Contact us")]'),
  },

  openPage: async function () {
    await helpers.loadPage(page.home.url);
  },

  headerTextIsAsExpected: async function (excectedText) {
    await driver.wait(
      until.elementLocated(page.contact.elements.header),
      shared.testData.timeOut
    );
    const header = await driver
      .findElement(page.contact.elements.header)
      .getText();
    await expect(header).to.equal(excectedText);
  },
};
