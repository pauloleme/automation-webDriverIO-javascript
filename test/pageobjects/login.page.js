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
    await this.click(this.loginTab);
  }

  async closePopUp() {
    await this.click(this.loginPopUp);
  }

  async login(email, password) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}

module.exports = new LoginPage();