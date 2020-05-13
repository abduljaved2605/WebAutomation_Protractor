var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
    var emailInputTextElement1 = element(by.id("inputEmail"));
    var passwordInputTextElement = element(by.id("inputPassword"));
    var buttonLoadingElement = element(by.id("test5-button"));
    var WEBSITE_URL_ADDRESS = "C:\\Automation\\Protector\\index.html"



  
  this.get = function() {
      browser.get(WEBSITE_URL_ADDRESS);
    };
  
  this.setEmail = function(name) {
    emailInputTextElement1.sendKeys(name);
    };

 this.setPassword = function(name) {
    passwordInputTextElement.sendKeys(name);
      };
  
  this.getGreeting = function() {
      return greeting.getText();
    };

  this.tableData = function(x,y)
  {
    
    var value_row =x+1;
    var value_column= y+1;
    var columData = element(By.xpath("/html/body/div/div[6]/div/div/table/tbody/tr["+ value_row+"]/td["+value_column+"]"));
    return columData
  };

  this.defaultWait = function()
  {
    browser.manage().timeouts().implicitlyWait(0);

        browser.wait(function () {
            browser.sleep(2000);
            return buttonLoadingElement.isDisplayed()
            .then(
                function (isDisplayed) { 
                    return isDisplayed; 
                     }, 
                        function (error) { 
                             return false 
                                     });
                        }, 20 * 1000);

  }

  };
  module.exports = AngularHomepage