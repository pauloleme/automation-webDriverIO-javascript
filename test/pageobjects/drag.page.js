const BasePage = require('./base.page');

class DragPage extends BasePage {
  get dragTab() {
    return $('~Drag');
  }

  get dragTitle() {
    return $('//*[@text="Drag and Drop"]');
  }

  async open() {
    await this.click(this.dragTab);
  }
}

module.exports = new DragPage();