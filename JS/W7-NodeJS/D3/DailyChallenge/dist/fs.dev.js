"use strict";

var fs = require('fs');

var file = fs.readFileSync(__dirname + '/right-left.pro.txt').toString();
var counter = 0;
var target = 0;

for (var i = 0; i < file.length; i++) {
  file[i] === ">" ? counter++ : file[i] === "<" ? counter-- : null;
  target === 0 ? counter === -1 ? target = i + 1 : null : null;
}

console.log("Position: " + counter);
console.log("first reached -1 at " + target);