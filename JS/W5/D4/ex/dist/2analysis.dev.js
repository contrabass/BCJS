"use strict";

function resolveAfter2Seconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('resolved');
    }, 2000);
  });
}

function asyncCall() {
  var result;
  return regeneratorRuntime.async(function asyncCall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('calling');
          _context.next = 3;
          return regeneratorRuntime.awrap(resolveAfter2Seconds());

        case 3:
          result = _context.sent;
          console.log(result);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

asyncCall();