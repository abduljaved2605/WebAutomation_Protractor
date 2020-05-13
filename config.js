var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().timeouts().setScriptTimeout(60000);

         // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
         jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots'
         }).getJasmine2Reporter());

         var AllureReporter = require('jasmine-allure-reporter');
         jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
          }));
    }

   
};