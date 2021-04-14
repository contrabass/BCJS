// Exercise 3: Find The Multiples Of 23
// Instructions
// Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.


let sum=0;
let base=23;
let max=500;
    

function twentyThreeAndMe(){
    while (sum < max-base){
        console.log(sum+=base)
    }
    return sum;
}

console.log(twentyThreeAndMe());