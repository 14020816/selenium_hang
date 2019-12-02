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

function test (){

}

async function hang1 (){
    setTimeout( () =>{
        console.log("hang1")
    }, 2000)
}


async function hang2 (){
    setTimeout( () =>{
        console.log("hang2")
    }, 2000)
}
