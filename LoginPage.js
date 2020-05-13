function LoginPage() {
	
	this.tableValue = function(rowVale,CloumnValue)
	{
		var row= rowVale;
        var colum = CloumnValue;
        console.log("***************8")
	};

    /*
     * Elements
     */
    this.userNameInput = element(by.id('userNameInput'));
    this.passwordInput = element(by.id('passwordInput'));
    this.loginButton = element(by.id('loginButton'));
    this.loginHint = element(by.id('loginHint'));
  
    this.welcomeText = 'Welcome, you just logged in';
    
    /*
     * Functions
     */

    this.login = function (userName, password) {
        this.userNameInput.sendKeys(userName);
        this.passwordInput.sendKeys(password);
        this.loginButton.click();
    };
  
    this.assertUserIsLoggedIn = function() {
      expect(this.loginHint.getText()).toBe(this.welcomeText);
    }
}
module.exports = LoginPage;