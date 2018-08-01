var idx = Math.floor((new Date().getHours()));
var body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

const server = require('http').createServer();

const io = require('socket.io')(server, {
  path: '/test',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

server.listen(3000);
