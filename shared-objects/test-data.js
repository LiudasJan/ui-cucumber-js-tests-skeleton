module.exports = {
    timeOut: 20000,
    baseUrl: 'https://www.qaontime.com',
    authorization: '',

    sleep: function (miliseconds) {
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) { }
    },

    replaceAll: function (string, search, replace) {
        return string.split(search).join(replace);
    },

    getRandomString: function (possible, length) {
        let text = '';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },
};
