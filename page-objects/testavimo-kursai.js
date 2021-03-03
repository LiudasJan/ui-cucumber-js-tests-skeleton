const { By } = require("selenium-webdriver");

module.exports = {
  url: shared.testData.baseUrl + "/testavimo-kursai",

  elements: {
    header: By.xpath('//h1[contains(text(),"PROGRAMINĖS")]'),
  },

  openPage: async function () {
    await helpers.loadPage(page.home.url);
  },

  headerTextIsAsExpected: async function (excectedText) {
    await driver.wait(
      until.elementLocated(page.testavimoKursai.elements.header),
      shared.testData.timeOut
    );
    const header = await driver
      .findElement(page.testavimoKursai.elements.header)
      .getText();
    await expect(header).to.contain(excectedText);
  },
};
