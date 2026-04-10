class FormPage {
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

  get dropdownText(){
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
    await $('~Forms').click();
  }

  async typeInInput(text) {
    await this.inputField.setValue(text);
  }

  async getTypedText() {
    return await this.typedResult.getText();
  }

  async toggleSwitch() {
    await this.switchButton.click();
  }

  async getSwitchText() {
    return await this.switchText.getText();
  }

  async openDropdown() {
    await this.dropdown.click();
  }

async popupBtn(){
 await $('id=android:id/button1').click();
}
  async selectDropdownOption() {
    await this.openDropdown();
      await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]').click();

  }

  async clickActiveButton() {
    await this.activeButton.click();
    await this.popupBtn();
  }

  async clickInactiveButton() {
    await this.inactiveButton.click();
  }
}

module.exports = new FormPage();