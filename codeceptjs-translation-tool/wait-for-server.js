const { startServer } = require('./app');
const portfinder = require('portfinder');

portfinder.getPortPromise()
  .then((port) => {
    global.testPort = port;
    return startServer(port);
  })
  .then((server) => {
    global.testServer = server;
  })
  .catch((err) => {
    console.error('Error starting server:', err);
  });
