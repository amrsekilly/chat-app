// require the packages
const app = require('express')();
const http = require('http').Server(app);
// import socket.io
const Socket = require("socket.io")(http);

// main route
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

// listen on port 3000 for requests
http.listen(3000, () => console.log("listening on *:3000"));

// listen on any socket connection
Socket.on('connection', (socket) => {
  console.log("A user is connected");
  // detect if the client disconnected from the socket
  socket.on('disconnect', () => {
    console.log("user disconnected");
  });
});
