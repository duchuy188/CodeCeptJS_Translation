const translations = require('./translations.json');

function translate(text, language) {
  const translation = translations[language] && translations[language][text];
  if (translation) {
    return translation;
  } else {
    return `Translation not found for "${text}" in ${language}`;
  }
}

module.exports = translate;