const FormPage = require('../pageobjects/form.page');
const formData = require('../data/form.data');

describe('Populate Form Screen - Valid Scenarios', () => {
  beforeEach(async () => {
    await FormPage.open();
  });

  it('Should type text in the input field and display the typed value', async () => {
    await FormPage.typeInInput(formData.validForm.inputText);
    await expect(FormPage.typedResult).toHaveText(formData.validForm.inputText);
  });

  it('Should turn the switch ON successfully', async () => {
    await expect(FormPage.switchText).toHaveText(formData.validForm.switchOffText);

    await FormPage.toggleSwitch();

    await expect(FormPage.switchText).toHaveText(formData.validForm.switchOnText);
  });

  it('Should select an item from the dropdown successfully', async () => {
    await FormPage.selectDropdownOption();
    expect(await FormPage.dropdownText.getAttribute('text')).toBe('Appium is awesome');
  });

  it('Should click the Active button successfully', async () => {
    await FormPage.clickActiveButton();
    await expect(FormPage.activeButton).toBeDisplayed();
  });

  it('Should click the Inactive button successfully', async () => {
    await FormPage.clickInactiveButton();
    await expect(FormPage.inactiveButton).toBeDisplayed();
  });
});

describe('Populate Form Screen - Forced Failure Scenario', () => {
  beforeEach(async () => {
    await FormPage.open();
  });

  it('Should intentionally fail after typing text in the input field and verifying the displayed value', async () => {
    await FormPage.typeInInput(formData.validForm.inputText);
    await expect(FormPage.typedResult).toHaveText('failed');
  });
});