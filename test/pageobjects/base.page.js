class BasePage {
  open(path) {
    browser.url(path);
  }

 async click(element) {
     await element.waitForDisplayed();
     await element.click();
   }

 async type(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  async getText(element){
    await element.waitForDisplayed();
    return await element.getText();
  }
}

module.exports = BasePage;
