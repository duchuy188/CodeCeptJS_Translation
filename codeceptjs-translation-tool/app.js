const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const portfinder = require('portfinder');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const translations = JSON.parse(fs.readFileSync('translations.json', 'utf8'));

app.get('/', (req, res) => {
  console.log('Received request for home page');
  res.render('index', { translatedText: '', selectedLanguage: '', originalText: '' });
});

app.post('/translate', (req, res) => {
  console.log('Request headers:', req.headers);
  const { text, language } = req.body;
  console.log(`Received translation request: text="${text}", language="${language}"`);
  console.log('Full request body:', req.body);
  console.log('Language type:', typeof language);
  
  let translatedText;
  const lowerText = text.toLowerCase().trim();

  function findBestMatch(text, language) {
    const words = text.toLowerCase().split(' ');
    let bestMatch = '';
    let maxMatchedWords = 0;

    Object.keys(translations[language]).forEach(key => {
      const keyWords = key.split(' ');
      const matchedWords = words.filter(word => keyWords.includes(word)).length;
      if (matchedWords > maxMatchedWords) {
        maxMatchedWords = matchedWords;
        bestMatch = key;
      }
    });

    return bestMatch;
  }

  const bestMatch = findBestMatch(lowerText, language);
  if (bestMatch) {
    translatedText = translations[language][bestMatch];
    // Preserve the original case of the input text
    if (text[0] === text[0].toUpperCase()) {
      translatedText = translatedText.charAt(0).toUpperCase() + translatedText.slice(1);
    }
  } else {
    translatedText = `Translation not found for "${text}" in ${language}`;
  }
  
  console.log('Sending response:', { translatedText });
  res.json({ translatedText });
});

app.get('/list', (req, res) => {
  res.render('list', { translations });
});

app.get('/suggest', (req, res) => {
  const { text, language } = req.query;
  const suggestions = Object.keys(translations[language] || {})
    .filter(key => key.startsWith(text.toLowerCase()))
    .slice(0, 5);
  res.json(suggestions);
});

async function startServer(port) {
  console.log('Starting server with port:', port);
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      resolve(server);
    });
  });
}

module.exports = { startServer, app };

app.use((req, res, next) => {
  console.log(`Received request for: ${req.url}`);
  next();
});

app.get('/favicon.ico', (req, res) => res.status(204));