const BasePage = require('./base.page');

class HomePage extends BasePage {
  get homeTab() {
    return $('~Home');
  }

  get homeTitle() {
    return $('~Home-screen');
  }

  async open() {
    await this.click(this.homeTab);
  }
}

module.exports = new HomePage();