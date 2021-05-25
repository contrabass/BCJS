"use strict";

var fs = require('fs');

var content = "Lorem ipsum dolor sit amet...";
fs.appendFile('data.txt', '\n' + content, function (err) {
  if (err) {
    console.error(err);
    return;
  }
});
fs.appendFile('data.txt', '\nsome more text.', function (err) {
  if (err) {
    console.error(err);
    return;
  }
});
fs.unlink('data.', function (err) {
  console.log(err);
});