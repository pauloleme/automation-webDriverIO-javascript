const LoginPage = require('../pageobjects/login.page');
const loginData = require('../data/login.data.js');



describe('Login Valid Credentials', () => {
  it('Should log in with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login(loginData.validUser.email, loginData.validUser.password);
    await LoginPage.closePopUp();
  });
});

describe('Login Invalid Credentials', () => {
  it('Should display an error when attempting to log in without a password', async () => {
    await LoginPage.open();
    await LoginPage.login(loginData.validUser.email, loginData.emptyPassword.password);
    await expect(LoginPage.shortPasswordError).toBeDisplayed();
  });
});