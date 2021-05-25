"use strict";

var express = require("express");

var app = express();
var port = 3000;
app.get("/", function (req, res) {
  res.set('content-type', 'text/html');
  res.send("<h1>Hello world!</h1>");
});
app.listen(port, function () {
  console.log("Exapmle app listening at http://localhost:".concat(port));
});