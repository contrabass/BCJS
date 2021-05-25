const fs = require('fs');

// fs.readFile ("./data.txt", (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(JSON.parse(data.toString())[0]);
//     }
//     )
// });
// console.log('after reading from a file')

const data fs.readFileSync('./data.txt')
console.log(data.toString);
console.log('after reading from a file')