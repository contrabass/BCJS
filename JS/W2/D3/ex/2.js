// Exercise 2 : List Of People
console.log('W2D3ex2');
let people = ["Greg", "Mary", "Devon", "James"]
// // Instructions
// 1. Write code to remove “Greg” from the people array.
console.log('\n1.');
people.splice((people.indexOf("Greg")),1);
console.log(people);
// 2. Write code to replace “James” to “Jason”.
console.log('\n2.');
people.splice((people.indexOf("James")),1, "Jason");
console.log(people);
// 3. Write code to add your name to the end of the people array.
console.log('\n3.');
people.push("Ma'ayan");
console.log(people);
// 4. Using a loop, iterate through the people array and console.log each person.
console.log('\n4.');
for (let p of people){
    console.log(p);
}
// 5. Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
console.log('\n5.');
for (let p of people){
    console.log(p);
    if (p == 'Jason'){
        break;
    }
}
// 6. Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
console.log('\n6.');
let people6 = [] = people.slice(people.indexOf("Mary")+1, people.indexOf("Ma'ayan"));
console.log(people6);
// 7. Write code that console.logs Mary’s index. take a look at indexOf on google.
console.log('\n7.');
console.log(people.indexOf("Mary"));
// 8. Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
console.log('\n8.');
console.log(people.indexOf("Foo") + " which represents Foo not being found");
// 9. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
console.log('\n9.');
let last = people[people.length-1];
console.log(last);