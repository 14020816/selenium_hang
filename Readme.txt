#LucND 
Text editor: Visual studio code (ESlint plugin)
1. Install Selenium web driver:
For Chrome: https://chromedriver.storage.googleapis.com/78.0.3904.70/chromedriver_win32.zip
Set path: https://selenium.dev/documentation/en/webdriver/driver_requirements/#adding-executables-to-your-path


open cmd (admin) --> setx /m path "%path%;D:\WORK_SPACE\selenium" 

2. Install NodeJS
3. Create new project
	Create new folder --> open cmd in this folder
	Run: npm install selenium-webdriver
* Refer: https://selenium.dev/documentation/en/selenium_installation/installing_selenium_libraries/

const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // await driver.get('http://www.google.com/ncr');
    // await driver.findElement(By.name('q')).sendKeys('hangtys', Key.RETURN);
    await driver.get('http://hoso.mygo.onl/login');
    await driver.findElement(By.id('phone_number')).sendKeys('0968283266');
    var element = driver.findElement(By.id("btn_login"));
    await driver.executeScript("arguments[0].click();", element);
    // setTimeout( ()=> {
    //     console.log("OK")
    // }, 2000)
    await driver.wait(function () {
        return driver.isElementPresent(driver.findElement(By.id('req_otp')));
    }, 2000);
  } 
  finally {
    await driver.quit();
  }
})();


GIT:  https://tortoisegit.org/
Clone repo to a new folder:
-- git clone https://github.com/14020816/selenium_hang.git

-- add : git add "file_name" kkk
-- Commit
	git commit -m "message"
-- Push
	git push origin master