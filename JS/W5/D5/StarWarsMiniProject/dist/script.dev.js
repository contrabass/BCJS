"use strict";

display = document.getElementById("display");
randomizeButton = document.getElementById("randomizeButton");

var getFromSWAPI = function getFromSWAPI() {
  var response;
  return regeneratorRuntime.async(function getFromSWAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://swapi.dev/api/people/" + Math.ceil(Math.random() * 83) + "/").then(function (res) {
            return res.json();
          }).then(function (data) {
            return results = data;
          })["catch"](function (e) {
            return display.innerText = e;
          }));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", results);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var displayNewPerson = function displayNewPerson(data) {
  display.innerText = "";
  display.innerText = "Name: " + data.name;
  display.innerText = display.innerText + "\n" + "Birth year: " + data.birth_year; // display.innerText=data;
};

var switchPerson = function switchPerson() {
  return regeneratorRuntime.async(function switchPerson$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = displayNewPerson;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getFromSWAPI());

        case 3:
          _context2.t1 = _context2.sent;
          (0, _context2.t0)(_context2.t1);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

randomizeButton.addEventListener("click", switchPerson);