"use strict";

var http = require("http");

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var user = {
    firstname: 'John',
    lastname: 'Doe'
  };
  res.end(JSON.stringify(user));
});
server.listen(8080);