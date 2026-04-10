const LoginPage = require('../pageobjects/login.page');
const SignUpPage = require('../pageobjects/signUp.page');
const HomePage = require('../pageobjects/home.page');
const FormsPage = require('../pageobjects/form.page');
const SwipePage = require('../pageobjects/swipe.page');
const DragPage = require('../pageobjects/drag.page');

describe('Navigation', () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it('Should navigate from Login screen to Sign Up screen', async () => {
    await SignUpPage.open();
    await expect(SignUpPage.signUpButton).toBeDisplayed();
  });

  it('Should navigate to Home screen', async () => {
    await HomePage.open();
    await expect(HomePage.homeTitle).toBeDisplayed();
  });

  it('Should navigate to Forms screen', async () => {
    await FormsPage.open();
    await expect(FormsPage.formsTitle).toBeDisplayed();
  });

  it('Should navigate to Swipe screen', async () => {
    await SwipePage.open();
    await expect(SwipePage.swipeTitle).toBeDisplayed();
  });

  it('Should navigate to Drag screen', async () => {
    await DragPage.open();
    await expect(DragPage.dragTitle).toBeDisplayed();
  });
});