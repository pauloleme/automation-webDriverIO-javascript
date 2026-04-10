const BasePage = require('./base.page');

class SwipePage extends BasePage {
  get swipeTab() {
    return $('~Swipe');
  }

  get swipeTitle() {
    return $('~Swipe-screen');
  }

  async open() {
    await this.click(this.swipeTab);
  }
}

module.exports = new SwipePage();