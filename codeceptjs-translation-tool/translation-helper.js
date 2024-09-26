const Helper = require('@codeceptjs/helper');
const TranslationTool = require('./translation-tool.js');

class TranslationHelper extends Helper {
  constructor(config) {
    super(config);
    this.translationTool = new TranslationTool();
  }

  _beforeSuite() {
    const { I } = inject();
    I.translate = (key, category = 'actions') => this.translationTool.translate(key, category);
  }
}

module.exports = TranslationHelper;
