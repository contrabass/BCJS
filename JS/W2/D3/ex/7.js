// Exercise 7 : Secret Group
// Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

names.sort();
let societyNameArr=[];
console.log(names);
for (let name of names){
    societyNameArr.push(name[0]);
}
console.log(societyNameArr.join(""));