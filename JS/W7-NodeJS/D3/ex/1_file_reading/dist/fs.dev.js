"use strict";

var fs = require('fs');

fs.readFile(__dirname + '/readMe', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});