class FormPage {
  get formsTab() {
    return $('~Forms');
  }

  get inputField() {
    return $('~text-input');
  }

  get typedResult() {
    return $('~input-text-result');
  }

  get switchButton() {
    return $('~switch');
  }

  get switchText() {
    return $('~switch-text');
  }

  get dropdown() {
    return $('~Dropdown');
  }

  get dropdownText() {
    return $('//android.widget.EditText[@resource-id="text_input"]');
  }

  get activeButton() {
    return $('~button-Active');
  }

  get inactiveButton() {
    return $('~button-Inactive');
  }

  get formsTitle() {
    return $('~Forms-screen');
  }

  async open() {
    await this.formsTab.waitForDisplayed({ timeout: 30000 });
    await this.formsTab.click();
    await this.inputField.waitForDisplayed({ timeout: 30000 });
  }

  async typeInInput(text) {
    await this.inputField.waitForDisplayed({ timeout: 30000 });
    await this.inputField.setValue(text);
  }

  async getTypedText() {
    await this.typedResult.waitForDisplayed({ timeout: 30000 });
    return await this.typedResult.getText();
  }

  async toggleSwitch() {
    await this.switchButton.waitForDisplayed({ timeout: 30000 });
    await this.switchButton.click();
  }

  async getSwitchText() {
    await this.switchText.waitForDisplayed({ timeout: 30000 });
    return await this.switchText.getText();
  }

  async openDropdown() {
    await this.dropdown.waitForDisplayed({ timeout: 30000 });
    await this.dropdown.click();
  }

  async popupBtn() {
    const popup = $('id=android:id/button1');
    if (await popup.isDisplayed().catch(() => false)) {
      await popup.click();
    }
  }

  async selectDropdownOption() {
    await this.openDropdown();
    const option = $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]');
    await option.waitForDisplayed({ timeout: 30000 });
    await option.click();
  }

  async clickActiveButton() {
    await this.activeButton.waitForDisplayed({ timeout: 30000 });
    await this.activeButton.click();
    await this.popupBtn();
  }

  async clickInactiveButton() {
    await this.inactiveButton.waitForDisplayed({ timeout: 30000 });
    await this.inactiveButton.click();
  }
}

module.exports = new FormPage();