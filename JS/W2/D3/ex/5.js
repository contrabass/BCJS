// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    father: 35,
    mother:36,
    daughter:11
};
// Console.log the keys. (using a for loop).

for (const key in family) {
    if (family.hasOwnProperty(key)) {
        console.log(`${key}`);
    }
}

// Console.log the values. (using a for loop).
values = Object.values(family);
for (let v=0; v<values.length; v++){
    console.log(values[v]);
}

//OR
Object.values(family).forEach(val => console.log(val));
