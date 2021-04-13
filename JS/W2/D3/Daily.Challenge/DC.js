// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.



// let stri='%c*%c*';
// console.log(stri, 'color:#00EE00', 'color #000000');

let str="";
for (let i=0; i<6; i++){
    i==0 ? str+=('%c * %c'): str+=('* ');
    (i==0||(i+1)%2==0) ? console.log(str, 'color:#00EE00', 'color:#FFFFFF') :console.log(str, 'color:#FFFFFF' ,'color:#FFFFFF');
}

for (let i=0; i<6; i++){
    str="";
    for (let j=0; j<i+1; j++){    
        j==0 ? str+=('%c * %c'): str+=('* ');
    }
    (i==0||(i+1)%2==0) ? console.log(str, 'color:#00EE00', 'color:#FFFFFF') :console.log(str, 'color:#FFFFFF' ,'color:#FFFFFF');
}