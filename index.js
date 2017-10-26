// require the packages
var app = require('express')();
var http = require('http').Server(app);

// main route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// listen on port 3000 for requests
http.listen(3000, function () {
  console.log('listening on *:3000');
});