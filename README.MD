# ui-cucumber-js-tests-skeleton

UI Tests skeleton using JavaScript browser automation framework official [selenium-webdriver](http://seleniumhq.github.io/selenium/docs/api/javascript/ "view webdriver js documentation") and [cucumber-js](https://github.com/cucumber/cucumber-js "view cucumber js documentation").

These tests are for demo.

Requirements
------------

- [Visual Studio Code](https://code.visualstudio.com/Download)
- [Node.js](https://nodejs.org/en/)

## Installation

```bash
npm install 
```

## Run tests

```bash
npm run test
```

#### for Runing separate feature tests
```
node index.js -s ./step-definitions -f ./features/<feature-file>.feature
```

These test are based on [john-doherty / selenium-cucumber-js](https://github.com/john-doherty/selenium-cucumber-js)
