// require the packages
var app = require('express')();
var http = require('http').Server(app);

// main route
app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
});

// listen on port 3000 for requests
http.listen(3000, function () {
  console.log('listening on *:3000');
});