const BasePage = require('./base.page');

class SignUpPage extends BasePage {
  get signUpTab() {
    return $('//*[@text="Sign up"]');
  }

  get emailInput() {
    return $('~input-email');
  }

  get passwordInput() {
    return $('~input-password');
  }

  get confirmPasswordInput() {
    return $('~input-repeat-password');
  }

  get signUpButton() {
    return $('~button-SIGN UP');
  }

  get signUpPopUp() {
    return $('id=android:id/button1');
  }

  get shortPasswordError() {
    return $('//*[@text="Please enter at least 8 characters"]');
  }

  get passwordMismatchError() {
    return $('//*[@text="Please enter the same password"]');
  }

  get invalidEmailError() {
    return $('//*[@text="Please enter a valid email address"]');
  }

  async open() {
    await this.click(this.signUpTab);
  }

  async closePopUp() {
    await this.click(this.signUpPopUp);
  }

  async signUp(email, password, confirmPassword) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);

    if (confirmPassword !== undefined) {
      await this.type(this.confirmPasswordInput, confirmPassword);
    }

    await this.click(this.signUpButton);
  }
}

module.exports = new SignUpPage();