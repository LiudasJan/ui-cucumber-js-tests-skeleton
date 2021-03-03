module.exports = function () {

    this.When(/^open pricing page$/, function () {
        return page.testavimoKursai.openPage();
    });

    this.Then(/^"([^"]*)" header is present in TESTAVIMO KURSAI page$/, function (excectedText) {
        return page.testavimoKursai.headerTextIsAsExpected(excectedText);
    });

}
