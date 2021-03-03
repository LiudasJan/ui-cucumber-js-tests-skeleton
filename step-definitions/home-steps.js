module.exports = function () {

    this.When(/^open "([^"]*)" page$/, function (url) {
        return page.home.openAnyPage(url);
    });
    this.Then(/^"([^"]*)" header is present$/, function (excectedText) {
        return page.home.headerTextIsAsExpected(excectedText);
    });
    this.When(/^user press "([^"]*)" menu button$/, function (button) {
        return page.home.pressMenuButton(button);
    });
    
}
