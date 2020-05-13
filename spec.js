

//var homepageClass = require('C:\\Automation\\Protector\\angularHomePage.po');
var homepageClass = require('..\\Protector\\angularHomePage.po');


describe('Test suite to verify different features',function()
{

    var signButtonElement = element(by.xpath("/html/body/div/div[1]/div/form/button"));
    var emailInputTextElement = element(by.id("inputEmail"));
    var passwordInputTextElement = element(by.id("inputPassword"));
    var totalCountOfListgroup = element.all(by.className('list-group-item justify-content-between'));
    var badgeValue = element(By.xpath("//*[@id=\"test-2-div\"]/ul/li[2]/span"));
    var dropDow = element.all(By.css("#test-3-div > div > div > a:nth-child(1)"))
    var dropDwonButton = element(by.id("dropdownMenuButton"))

    var buttonEnabledElement = element(by.xpath("//*[@id=\"test-4-div\"]/button[1]"));
    var buttondisabledElement = element(by.xpath("//*[@id=\"test-4-div\"]/button[2]"));
    var buttonLoadingElement = element(by.id("test5-button"));
    var textElement = element(by.id("test5-alert"));

    var Email_Text = "info@protractor.com";
    var PassWord_Text = "password";
    var List_Count = 3;
    var Badge_Value = "6";

    var homepage = new homepageClass();

    /***
     * Lauch URL 
     */

     beforeAll(function()
     {
            
        browser.ignoreSynchronization=true;
        homepage.get()
     }
     );
 
     /*
	/*Test Case 1 : Verify Email and password text field
	 * Send text in email and password text filed
	 * verify sign in button
	 */

    it('Test Case 1 Navigate to browser and verify fields and send text',function()
    {
        
        homepage.setEmail(Email_Text)
        homepage.setPassword(PassWord_Text)
        
   
        //Verify Email , Password , Text Fields
   
        expect(emailInputTextElement.isPresent()).toBe(true);
        expect(passwordInputTextElement.isPresent()).toBe(true);
        expect(signButtonElement.isPresent()).toBe(true);
        
    });
    
    	/*
	 * Test Case 2 : To verify 3 elements in the list 
	 * Not done : To verify the title  is displayed as "List item 2"
	 * To verify badge value as "6"
	 * 
	 */

    it('Test Case 2 : to get list of elements',function()
    {
        // Verify Total List  in the group
        expect(totalCountOfListgroup.count()).toEqual(List_Count);

        // Verify of Bade  value   in the group
        expect(badgeValue.getText()).toEqual(Badge_Value)

    }
    
    );

    /*Test case 3: Option 1 is the default value
	 * Select Option 3 from drop down
	 * 
	 */

    it('Test case:3 slect drop dpown ',function()
    {
 
       
    
        dropDwonButton.click()

        homepage.defaultWait()
        var dropDowMenu = element.all(By.className("dropdown-item"))

        //Verify default value is Option 1        

        var defaultValueinDropDown = dropDowMenu.first()
        expect(defaultValueinDropDown.getText()).toEqual("Option 1");

        //Verify value ' Option 3  ' is selected from drop down      

       var option3 = dropDowMenu.last()
       option3.click()

    }
    );

    /*Test Case 4
	 * First button is enabled
	 * Second Button is disabled
	 */

    it('Test case:4 To verify button is enabled or disbaled ',function()
    {
       
        expect(buttonEnabledElement.isEnabled()).toBe(true);
        expect(buttondisabledElement.isEnabled()).toBe(false);

    });

    /*
    * Test case 5 : Wait for Button to be displayed 
    *Click on the button and verify the message is displayed
    *Assert Button is disabled
    *
    * */


    it('Test case:5 To wait for an element to present and then click  ',function()
    {
        
        homepage.defaultWait()
        buttonLoadingElement.isDisplayed()
        buttonLoadingElement.click()

        //Verify text is present and button is disabled
        expect(textElement.isPresent()).toBe(true);
        expect(buttonLoadingElement.isEnabled()).toBe(false);

    });

    /***Test  6: 
     * Get cell value from (2,2 )
     * Verify the value as 'Ventosanzap'
     */

    it('Test case 6:Select values from table ',function()
    {

        
       var columData = homepage.tableData(2,2)
       expect(columData.getText()).toEqual("Ventosanzap")

    });





});



