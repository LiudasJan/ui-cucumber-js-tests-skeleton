const { By } = require("selenium-webdriver");

module.exports = {
    url: shared.testData.baseUrl,

    elements: {
        header: By.xpath('//p[@class="h-1"]'),
        h2: By.xpath('//p[contains(text(),"software quality")]'),
        homeButton: By.xpath('//a[contains(text(),"Home")]'),
        aboutButton: By.xpath('//a[text() = "About"]'),
        pricingButton: By.xpath('//a[contains(text(),"Pricing")]'),
        contactButton: By.xpath('//a[contains(text(),"Contact")]'),
        testavimoKursaiButton: By.xpath('//a[contains(text(),"TESTAVIMO KURSAI")]')
    },

    getMenuButton: function (menu) {
        return By.xpath(`//a[text() = "${menu}"]`);
    },

    openPage: async function () {
        await helpers.loadPage(page.home.url);
    },

    openAnyPage: async function (url) {
        await helpers.loadPage(url);
    },

    headerTextIsAsExpected: async function (excectedText) {
        await driver.wait(until.elementLocated(page.home.elements.header), shared.testData.timeOut);
        const header =  await driver.findElement(page.home.elements.header).getText();
        await expect(header).to.contain(excectedText);

    },

    pressMenuButton: async function (menu) {
        await driver.wait(until.elementsLocated(page.home.getMenuButton(menu)), shared.testData.timeOut)
        await driver.findElement(page.home.getMenuButton(menu)).click();
    },

    pressHomeMenuButton: async function () {
        await driver.wait(until.elementsLocated(page.home.homeButton), shared.testData.timeOut)
        await driver.findElement(page.home.homeButton).click();
    },

};

