const express = require('express');
const http = require('http');
const setupWebSocketServer = require('./setupWebSocketServer');

const app = express();
const server = http.createServer(app);

setupWebSocketServer(server);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
