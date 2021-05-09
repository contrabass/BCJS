"use strict";

// // Instructions
// // Create two functions that use promises which can be chained.
// // The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// // The second function called sortWords(), should sort the words in alphabetical order.
// // If the array contains anything but strings, it should throw an error.
// Test:
var arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
var complicatedArray = ['cucumber', 44, true];

var makeAllCaps = function makeAllCaps(arr) {
  return new Promise(function (resolve, reject) {
    capitalized = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;

        if (typeof i !== "string") {
          reject("invalid array: ".concat(i, " is not a String."));
        }

        capitalized.push(i.toUpperCase());
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    resolve(capitalized);
  });
};

var sortWords = function sortWords(arr) {
  return new Promise(function (resolve, reject) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        item = _step2.value;

        if (typeof item !== "string") {
          reject("invalid array: ".concat(item, " is not a strinG."));
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    resolve(arr.sort());
  });
};

var run = function run(arr) {
  makeAllCaps(arr).then(function (r) {
    return sortWords(r);
  }).then(function (r) {
    return console.log(r);
  })["catch"](function (e) {
    return console.log(e);
  });
}; // run(arrayOfWords);


run(complicatedArray);
run(arrayOfWords);