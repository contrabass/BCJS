// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.

let str="";
for (let i=0; i<6; i++){
    i==0 ? str+=('%c* %c'): str+=('* ');
    (i==0||(i+1)%2==0) ? console.log(str, 'color:#00EE00', 'color:#FFFFFF') :console.log(str, 'color:#FFFFFF' ,'color:#FFFFFF');
}


for (let i=0; i<6; i++){
    str1="";
    for (let j=0; j<i+1; j++){    
        j==0 ? str1+=('%c* %c'): str1+=('* ');
    }
    (i==0||(i+1)%2==0) ? console.log(str1, 'color:#00EE00', 'color:#FFFFFF') :console.log(str1, 'color:#FFFFFF' ,'color:#FFFFFF');
}

for (let i=1; i<7; i++){
    if ((i==1)||(i%2==0)){
        console.log("%c* %c" + "* ".repeat(i-1), 'color:#00EE00', 'color:#FFFFFF')
    } else {
    console.log("* ".repeat(i));
    }
}