"use strict";

var http = require("http");

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end('<H2>This is my first response</H2><H1>This is my second reponse</H1><p>this is my third response</p>');
});
server.listen(3000);