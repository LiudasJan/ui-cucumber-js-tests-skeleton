module.exports = function () {

    this.When(/^open about us page$/, function () {
        return page.about.openPage();
    });

    this.Then(/^"([^"]*)" header is present in About us page$/, function (excectedText) {
        return page.about.headerTextIsAsExpected(excectedText);
    });

}
