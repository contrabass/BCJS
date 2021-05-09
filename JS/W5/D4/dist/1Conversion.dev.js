"use strict";

// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:
//fetch("https://swapi.dev/api/starships/9/")
//    .then(response => response.json())
//    .then(item => console.log(item));
var asyncFetch = function asyncFetch(url) {
  return regeneratorRuntime.async(function asyncFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch(url));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

asyncFetch("https://swapi.dev/api/starships/9/").then(function (ziv) {
  return console.log(ziv);
});