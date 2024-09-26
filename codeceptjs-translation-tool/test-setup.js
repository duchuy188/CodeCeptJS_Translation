const { startServer } = require('./app');
const portfinder = require('portfinder');

let server;

module.exports = {
  bootstrap: async () => {
    const port = await portfinder.getPortPromise();
    server = await startServer(port);
    console.log(`Test server started on port ${port}`);
    global.testPort = port;
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  },
  teardown: async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
      console.log('Test server closed');
    }
  }
};