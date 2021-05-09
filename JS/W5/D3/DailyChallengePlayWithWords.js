// // Instructions
// // Create two functions that use promises which can be chained.
// // The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// // The second function called sortWords(), should sort the words in alphabetical order.
// // If the array contains anything but strings, it should throw an error.
// Test:

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];


const makeAllCaps = (arr) =>{
    return new Promise((resolve,reject) => {
        capitalized=[];
        for (i of arr){
            if(typeof(i)!=="string"){reject(`invalid array: ${i} is not a String.`)}
            capitalized.push(i.toUpperCase())
        }
        resolve(capitalized);
    });
}

const sortWords = (arr) => {
  
    return new Promise((resolve,reject) => {
        for (item of arr){
            if (typeof(item)!=="string"){
            reject(`invalid array: ${item} is not a strinG.`)
            }
        }
        resolve(arr.sort());
    })
}

let run = (arr) => {
    makeAllCaps(arr)
    .then(r => sortWords(r))
    .then(r => console.log(r))
    .catch(e=>console.log(e));
}

// run(arrayOfWords);
run(complicatedArray);
run(arrayOfWords);