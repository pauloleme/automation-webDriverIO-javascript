const BasePage = require('./base.page');

class LoginPage extends BasePage {
  get loginTab() {
    return $('~Login');
  }

  get emailInput() {
    return $('~input-email');
  }

  get passwordInput() {
    return $('~input-password');
  }

  get loginButton() {
    return $('~button-LOGIN');
  }

  get loginPopUp() {
    return $('id=android:id/button1');
  }

  get invalidEmailError() {
    return $('//*[@text="Please enter a valid email address"]');
  }

  get shortPasswordError() {
    return $('//*[@text="Please enter at least 8 characters"]');
  }

  async open() {
    await this.loginTab.waitForDisplayed({ timeout: 30000 });
    await this.loginTab.click();
    await this.emailInput.waitForDisplayed({ timeout: 30000 });
  }

  async closePopUp() {
    if (await this.loginPopUp.isDisplayed().catch(() => false)) {
      await this.loginPopUp.click();
    }
  }

  async login(email, password) {
    await this.emailInput.waitForDisplayed({ timeout: 30000 });
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();