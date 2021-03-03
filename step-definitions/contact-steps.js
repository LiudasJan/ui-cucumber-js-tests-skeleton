module.exports = function () {

    this.When(/^open pricing page$/, function () {
        return page.contact.openPage();
    });

    this.Then(/^"([^"]*)" header is present in Contact us page$/, function (excectedText) {
        return page.contact.headerTextIsAsExpected(excectedText);
    });

}
