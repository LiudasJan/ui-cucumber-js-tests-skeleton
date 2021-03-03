module.exports = function () {

    this.When(/^open pricing page$/, function () {
        return page.pricing.openPage();
    });

    this.Then(/^"([^"]*)" header is present in Pricing page$/, function (excectedText) {
        return page.pricing.headerTextIsAsExpected(excectedText);
    });

}
