const assert = require('assert');

Feature('Translation Tool');

// Test translation of "hello world" to Vietnamese
Scenario('Test Vietnamese translation', async ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.see('Translation Tool');
  I.fillField('textarea[name="text"]', 'hello world');
  I.selectOption('select[name="language"]', 'vi');
  I.click('Translate');
  I.waitForText('xin chào thế giới', 15);
  const translatedText = await I.grabTextFrom('#translatedText');
  assert.equal(translatedText, 'xin chào thế giới', 'Translation is incorrect');
});

// Test translation of "world" to French
Scenario('Test French translation', async ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.waitForElement('h1', 5);
  I.see('Translation Tool');
  I.fillField('textarea[name="text"]', 'world');
  I.selectOption('select[name="language"]', 'fr');
  I.click('Translate');
  I.waitForText('monde', 15);
  const translatedText = await I.grabTextFrom('#translatedText');
  assert.equal(translatedText, 'monde', 'Translation is incorrect');
});

// Test translation of "walk" (lowercase) to Vietnamese
Scenario('Test Vietnamese translation with lowercase input', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'walk');
  I.selectOption('select[name="language"]', 'vi');
  I.click('Translate Now');
  I.waitForText('đi bộ', 5, '#translatedText');
});

// Test translation of "Walk" (uppercase) to Vietnamese
Scenario('Test Vietnamese translation with uppercase input', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'Walk');
  I.selectOption('select[name="language"]', 'vi');
  I.click('Translate Now');
  I.waitForText('Đi bộ', 5, '#translatedText');
});

// Test translation of "walk" (lowercase) to French
Scenario('Test French translation with lowercase input', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'walk');
  I.selectOption('select[name="language"]', 'fr');
  I.click('Translate Now');
  I.waitForText('marcher', 5, '#translatedText');
});

// Test translation of "Walk" (uppercase) to French
Scenario('Test French translation with uppercase input', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'Walk');
  I.selectOption('select[name="language"]', 'fr');
  I.click('Translate Now');
  I.waitForText('Marcher', 5, '#translatedText');
});

// Test translation of "walk" (lowercase) to German
Scenario('Test German translation with lowercase input', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'walk');
  I.selectOption('select[name="language"]', 'de');
  I.click('Translate Now');
  I.waitForText('gehen', 5, '#translatedText');
});

// Test translation of "Walk" (uppercase) to German
Scenario('Test German translation with uppercase input', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'Walk');
  I.selectOption('select[name="language"]', 'de');
  I.click('Translate Now');
  I.waitForText('Gehen', 5, '#translatedText');
});

// Test translation of "study" to Vietnamese
Scenario('Test Vietnamese translation for study', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'study');
  I.selectOption('select[name="language"]', 'vi');
  I.click('Translate Now');
  I.waitForText('học', 5, '#translatedText');
});

// Test translation of "learn" to Vietnamese
Scenario('Test Vietnamese translation for learn', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'learn');
  I.selectOption('select[name="language"]', 'vi');
  I.click('Translate Now');
  I.waitForText('học', 5, '#translatedText');
});

// Test translation of "university" to Vietnamese
Scenario('Test Vietnamese translation for university', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'university');
  I.selectOption('select[name="language"]', 'vi');
  I.click('Translate Now');
  I.waitForText('đại học', 5, '#translatedText');
});

// Test translation of "university" to French
Scenario('Test French translation for university', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'university');
  I.selectOption('select[name="language"]', 'fr');
  I.click('Translate Now');
  I.waitForText('université', 5, '#translatedText');
});

// Test translation of "university" to German
Scenario('Test German translation for university', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'university');
  I.selectOption('select[name="language"]', 'de');
  I.click('Translate Now');
  I.waitForText('universität', 5, '#translatedText');
});

// Test translation of "study" to French
Scenario('Test French translation for study', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'study');
  I.selectOption('select[name="language"]', 'fr');
  I.click('Translate Now');
  I.waitForText('étudier', 5, '#translatedText');
});

// Test translation of "learn" to French
Scenario('Test French translation for learn', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'learn');
  I.selectOption('select[name="language"]', 'fr');
  I.click('Translate Now');
  I.waitForText('apprendre', 5, '#translatedText');
});

// Test translation of "study" to German
Scenario('Test German translation for study', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'study');
  I.selectOption('select[name="language"]', 'de');
  I.click('Translate Now');
  I.waitForText('studieren', 5, '#translatedText');
});

// Test translation of "learn" to German
Scenario('Test German translation for learn', ({ I }) => {
  I.amOnPage(`http://localhost:${global.testPort}/`);
  I.fillField('textarea[name="text"]', 'learn');
  I.selectOption('select[name="language"]', 'de');
  I.click('Translate Now');
  I.waitForText('lernen', 5, '#translatedText');
});