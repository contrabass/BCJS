"use strict";

// let arr = ["1,2,5,6,7", "2,5,7,8,15"] 
// function elementsOf (arr) {
//     console.log(...arr);
// }
// elementsOf(arr);
//===============================
// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//bellow works - v0.9 - recursionless --------
// let ziv = (n) => {
//     console.log(n)
//     n = `${n}`
//     console.log(n)
//     let result = 0
//     for (let m=(n.length)-1; m>-1; m--){
//         result = result + +(n[m]);
//     }
//     console.log(result);
// } 
// ziv(64312);
// ---------V1------------
// let calc = (n) => {
//     if (n < 10) {
//         return n;
//     } else if (n%10===0){
//             return calc(n*0.1);
//     } else {
//         return n%10 + calc (n-n%10);
//     }
// }
//----------V1.1-----------------
// const sD = (n) => n < 10 ? n : n%10===0 ? sD(n*0.1) : n%10 + sD(n-n%10);
//----------V1.2-----------------
// const sD = (n) => n < 10 ? n : n%10 + sD((n-n%10)*.1)
// console.log(sD (151));
//===========================
// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', 'https://zivuch.github.io/data.json');
// // 3. Send the request over the network
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     // analyze HTTP status of the response
//     // e.g. 404: Not Found
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else { // show the result
//     // response is the server response
//     // console.log(`Done, got ${xhr.response.length} bytes`);
//     console.log(xhr.response);
//   }
// };
// //
// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
//   }
// };
// xhr.onerror = function() {
//   console.log("Request failed");
// };
//===================================
//===================================
// //Example XML - HTTP Request & Response
// // 1st step
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://zivuch.github.io/emails.xml');
// xhr.withCredentials = false;
// xhr.responseType = 'document';
// xhr.send();
// // 2nd step
// xhr.onload = function(){
//     if(xhr.status != 200){
//       console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
//     }
//     else{
//       console.log(xhr.response);
//       loadXml(xhr.response);
//     }
//   }
//   xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//       console.log(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//       console.log(`Received ${event.loaded} bytes`); // no Content-Length
//     }
//   };
//   xhr.onerror = function() {
//     console.log('Error something wrong###');
//   };
//   // 3rd step
//   function loadXml(xmlDoc) {
//     var cd = xmlDoc.getElementsByTagName("email");
//     for (let i = 0; i <cd.length; i++) {
//         console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
//         console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
//     }
// }
// // emails.xml
// emails.xml
//   <email>
//     <to>Vimal</to>
//     <from>Sonoo</from>
//     <heading>Hello</heading>
//     <body>Hello brother, how are you!</body>
//   </email>
//   <email>
//     <to>Peter</to>
//     <from>Jack</from>
//     <heading>Birth day wish</heading>
//     <body>Happy birth day Tom!</body>
//   </email>
//   <email>
//     <to>James</to>
//     <from>Jaclin</from>
//     <heading>Morning walk</heading>
//     <body>Please start morning walk to stay fit!</body>
//   </email>
//   <email>
//     <to>Kartik</to>
//     <from>Kumar</from>
//     <heading>Health Tips</heading>
//     <body>Smoking is injurious to health!</body>
//   </email>
//===========================================
//========================================
//===========================================
// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
var arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
var complicatedArray = ['cucumber', 44, true];

function makeAllCaps(arr) {
  return p = new Promise(function (resolve, reject) {
    var capArr = arr.map;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;

        if (typeof i !== "string") {
          reject("The array contains a non string vaule");
        } else {
          capArr.push(i.toUpperCase());
        }

        resolve(capArr);
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
  });
}

function sortWords(arr) {
  return new Promise(function (resolve, reject) {
    var returnArr = arr(sort);
    returnArr ? resolve(returnArr) : reject("error");
  });
}

makeAllCaps(["test", "bleh", "blah"]).then(function (result) {
  return console.log(result);
})["catch"](function (error) {
  return console.log(error);
}); //========================================
// console.log("1: a regular instruction");
// console.log(`2: user input: ${userInput()}; , a function that should be blocking 3`);
// console.log("3: a regular instruction; in most languages I know should only be printed after the user has entered the info for 3")
// function userInput (){
//     return prompt("Enter stuff");
// }
//========================================
//===========setTimeout Example===========
// console.log("running started");
// setTimeout(console.log, 8000, "Timout finished.");
//========================================
// const result = await(4+5); //?
// result
//==================================
// const urls = [ 
//    'https:/sapi.dev.api/people/1',
//    'https:/sapi.dev.api/people/2',
//    'https:/sapi.dev.api/people/3',
//    'https:/sapi.dev.api/people/4'
// ]
// Promise.all(urls.map(url=>{
//    fetch(url).then(res=>res.json());
// }))
// .then(data=> {
//    console.log(data);
// })
// .catch(err=> {
// console.log(err);
// });
//====================================