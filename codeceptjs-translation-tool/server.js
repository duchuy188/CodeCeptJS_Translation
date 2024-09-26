const { startServer } = require('./app');
const portfinder = require('portfinder');

portfinder.basePort = 8000; // Bắt đầu tìm từ cổng 8000
portfinder.getPort((err, port) => {
  if (err) {
    console.error('Could not get a free port', err);
    process.exit(1);
  }

  startServer(port).then(() => {
    console.log(`Server started successfully on port ${port}`);
  }).catch(error => {
    console.error('Failed to start server:', error);
  });
});