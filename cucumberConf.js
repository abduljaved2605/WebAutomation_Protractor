
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['spec.js'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['C:\\Automation\\Protector\\Test\\Cucumber\\Features\\*.feature'],
    
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 10
    },
    cucumberOpts: {
        require:['C:\\Automation\\Protector\\Test\\Cucumber\\StepDefinition\\loginSteps.js'],
    },

    onPrepare: function () {
      //  browser.get("https://www.yahoo.com")

 
    }

   
};