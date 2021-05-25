const fs = require('fs');

const file = fs.readFileSync(__dirname+'/right-left.pro.txt').toString();

let counter = 0;
let target = 0;

for (let i = 0; i<file.length; i++){
    file[i]===">" ? counter++ : file[i]==="<" ? counter--: null;
    target===0 ? counter === -1 ? target = i+1 : null : null;
    }

console.log("Position: " + counter);
console.log("first reached -1 at " + target);
