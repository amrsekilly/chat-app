// require the packages
const app = require('express')();
const http = require('http').Server(app);
// import socket.io
const Socket = require("socket.io")(http);

// main route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

Socket.on('connection', (socket) => {
  console.log("A user is connected");
});

// listen on port 3000 for requests
http.listen(3000, function () {
  console.log('listening on *:3000');
});