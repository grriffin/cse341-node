// core modules
/**
 * http => launches a server, send requests
 * https => launches an SSL server
 * fs => file system
 * path
 * os
 *
 */
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);
