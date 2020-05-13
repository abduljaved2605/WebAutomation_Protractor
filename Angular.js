var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
  
  this.get = function() {
      browser.get('C:\\Users\\Admin\\Desktop\\Resume\\servus\\index.html');
    };
  
  this.setName = function(name) {
      nameInput.sendKeys(name);
    };
  
  this.getGreeting = function() {
      return greeting.getText();
    };
  };
  module.exports = AngularHomepage