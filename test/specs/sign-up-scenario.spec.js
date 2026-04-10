const SignUpPage = require('../pageobjects/signUp.page');
const signupData = require('../data/signup.data');
const LoginPage = require('../pageobjects/login.page');

describe('Sign Up - Successful registration', () => {
  beforeEach(async () => {
    await LoginPage.open();
    await SignUpPage.open();
  });

  it('Should sign up with valid data', async () => {
    await SignUpPage.signUp(
      signupData.validUser.email,
      signupData.validUser.password,
      signupData.validUser.confirmPassword
    );
    await SignUpPage.closePopUp();
  });
});

describe('Sign Up - Password validation', () => {
  beforeEach(async () => {
    await LoginPage.open();
    await SignUpPage.open();
  });

  it('Should display an error when attempting to sign up without a password', async () => {
    await SignUpPage.signUp(
      signupData.validUser.email,
      '',
      ''
    );
    await expect(SignUpPage.shortPasswordError).toBeDisplayed();
  });

  it('Should display an error when signing up with a password shorter than 8 characters.', async () => {
    await SignUpPage.signUp(
      signupData.shortPassword.email,
      signupData.shortPassword.password,
      signupData.shortPassword.confirmPassword
    );
    await expect(SignUpPage.shortPasswordError).toBeDisplayed();
  });
});

describe('Sign Up - Password confirmation validation', () => {
  beforeEach(async () => {
    await LoginPage.open();
    await SignUpPage.open();
  });

  it('Should display an error when signing up with different passwords.', async () => {
    await SignUpPage.signUp(
      signupData.passwordMismatch.email,
      signupData.passwordMismatch.password,
      signupData.passwordMismatch.confirmPassword
    );
    await expect(SignUpPage.passwordMismatchError).toBeDisplayed();
  });
});