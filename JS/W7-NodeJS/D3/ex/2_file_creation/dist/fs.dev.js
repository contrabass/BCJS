"use strict";

var fs = require('fs');

var content = "Lorem ipsum dolor sit amet...";
fs.appendFile('data.txt', content, function (err) {
  if (err) {
    console.error(err);
    return;
  } //done!

});